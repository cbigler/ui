SHELL := /bin/bash
BABEL = ./node_modules/.bin/babel
NODE_SASS = ./node_modules/.bin/node-sass

.PHONY: help
help:
	@echo "Density UI Makefile"
	@echo
	@echo
	@echo "# Project-level targets"
	@printf "\t- make help\t\tshows this help page.\n"
	@printf "\t- make component\truns ./make-component, an interactive helper script to help generate new ui components.\n"
	@printf "\t- make components-list\treturns a list of all components in the components/ directory\n"
	@printf "\t- make clean\tremoves the built artifacts in the dist/ directory\n"
	@printf "\t- make build\tbuilds the main package's styles, and puts them into dist/\n"
	@printf "\t- make publish\tpublishes the main @density/ui package to npm\n"
	@echo
	@echo
	@echo "# Component-level targets"
	@echo
	@echo "Note: each component level target starts with the component name. In the below, the"
	@echo "component will be 'card' but this could very well be any component in the components/"
	@echo "directory."
	@echo
	@printf "\t- make card-clean\tremoves built artifacts within the components/card/dist/ directory.\n"
	@printf "\t- make card-build\tbuilds the component's javascript and styles, putting them into the components/card/dist/ directory.\n"
	@printf "\t- make card-publish\tpublishes the @density/ui-card component to the npm registry\n"
	@printf "\t- make card-version\tprints the component's version (found in package.json)\n"
	@printf "\t- make card-patch\tbumps the component's patch version\n"
	@printf "\t- make card-minor\tbumps the component's minor version\n"
	@printf "\t- make card-major\tbumps the component's major version\n"

.PHONY: component
component:
	./make-component

.PHONY: clean
clean:
	rm -rf dist/

.PHONY: build
build: dist/styles.css

.PHONY: publish
publish: clean build
	npm publish --access public

dist/:
	mkdir -p dist/

.PHONY: version
version:
	@printf "Package version: " && jq -r '.version' package.json 

.PHONY: version-%
version-%:
	npm version $(*F)

.PHONY: major minor patch
patch: version-patch
major: version-patch
minor: version-patch

.PHONY: components-list
components-list:
	@find components/ \
		-maxdepth 1 -mindepth 1 \
		-type d \
		! -name "template" ! -name "dist" \
		-exec basename '{}' ';'

# To make the main density-ui stylesheet, compile to css.
# @density/node-sass-json-importer is used to parse json files with variables inside. Learn more:
# https://github.com/DensityCo/node-sass-json-importer
# ie, `styles/main.scss` => `dist/styles.css`
dist/styles.css: dist/
	$(NODE_SASS) \
		--importer node_modules/@density/node-sass-json-importer/dist/node-sass-json-importer.js \
		styles/main.scss \
		> $@



define GEN_RULE
$(1)_COMPONENT_PATH = components/$(1)
$(1)_COMPONENT_PATH_DIST = components/$(1)/dist
$(1)_COMPONENT_SOURCE_FILES = $(shell ls components/$(1)/*.js)


# ie, components/card/foo.js => components/card/dist/foo.js
$(1)_COMPONENT_SOURCE_FILES_DIST = $(foreach i,$(shell ls components/$(1)/*.js),components/$(1)/dist/$(notdir $i))

# SECONDEXPANSION expands twice, producing something like card_COMPONENT_PATH_DIST in the below
# target (for example)
# More info: https://www.gnu.org/software/make/manual/html_node/Secondary-Expansion.html
.SECONDEXPANSION:
$1-clean:
	rm -rf $$($(1)_COMPONENT_PATH_DIST)

.SECONDEXPANSION:
$1-build: $$($(1)_COMPONENT_SOURCE_FILES_DIST) $$($(1)_COMPONENT_PATH_DIST)/styles.css

.SECONDEXPANSION:
$1-publish: $1-clean $1-build
	pushd $$($(1)_COMPONENT_PATH) > /dev/null && \
	npm publish --access public && \
	popd > /dev/null

# Create components/card/dist if it doesn't exist
.SECONDEXPANSION:
$$($(1)_COMPONENT_PATH_DIST):
	mkdir -p $$@

.SECONDEXPANSION:
$1-version:
	@pushd $$($(1)_COMPONENT_PATH) > /dev/null && \
	printf "Component $(1) version: " && \
	jq -r '.version' package.json && \
	popd > /dev/null

.SECONDEXPANSION:
$1-version-%:
	@pushd $$($(1)_COMPONENT_PATH) > /dev/null && \
	npm version $$(*F) && \
	popd > /dev/null

$1-major: $1-version-major
$1-minor: $1-version-minor
$1-patch: $1-version-patch

# To make each transpiled file, compile the source file with the same name
# ie, components/card/index.js => components/card/dist/index.js
.SECONDEXPANSION:
$$($(1)_COMPONENT_PATH_DIST)/%.js: $$($(1)_COMPONENT_PATH_DIST)
	$(BABEL) $$($(1)_COMPONENT_PATH)/$(@F) \
		--ignore=node_modules,$$($(1)_COMPONENT_PATH_DIST) \
		--presets=babel-preset-es2015,babel-preset-react \
		--plugins=babel-plugin-transform-object-rest-spread \
		| sed -n '/styles.scss/!p' \
		| sed -n '/"use strict"/!p' \
		> $$@

# To make each stylesheet, compile to css.
# @density/node-sass-json-importer is used to parse json files with variables inside. Learn more:
# https://github.com/DensityCo/node-sass-json-importer
# ie, components/card/styles.scss => components/card/dist/{_sass.scss,styles.css}
.SECONDEXPANSION:
$$($(1)_COMPONENT_PATH_DIST)/styles.css: $$($(1)_COMPONENT_PATH_DIST)
	cp $$($(1)_COMPONENT_PATH)/variables.json $$($(1)_COMPONENT_PATH_DIST)/variables.json
	cat $$($(1)_COMPONENT_PATH)/styles.scss \
		| sed -n '/@import.*\.json/!p' \
		> $$($(1)_COMPONENT_PATH_DIST)/_sass.scss
	$(NODE_SASS) \
		--importer node_modules/@density/node-sass-json-importer/dist/node-sass-json-importer.js \
		$$($(1)_COMPONENT_PATH)/styles.scss \
		> $$@

endef

$(foreach component_name,$(shell ls components),$(eval $(call GEN_RULE,$(component_name))))
