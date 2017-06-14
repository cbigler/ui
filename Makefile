
# First, ensure that `COMPONENT` has been set to tell us which component to build.
ifndef COMPONENT
$(error Please define COMPONENT - options are $(shell ls components/))
endif

COMPONENT_PATH = components/$(COMPONENT)
COMPONENT_PATH_DIST = $(COMPONENT_PATH)/dist
COMPONENT_SOURCE_FILES = $(shell ls $(COMPONENT_PATH)/*.js)

BABEL = ./node_modules/.bin/babel
NODE_SASS = ./node_modules/.bin/node-sass

.PHONY: build
build: $(foreach i,$(COMPONENT_SOURCE_FILES),$(COMPONENT_PATH_DIST)/$(notdir $i)) $(COMPONENT_PATH_DIST)/styles.css

.PHONY: publish
publish: clean build
	cd $(COMPONENT_PATH) && npm publish --access public

.PHONY: clean
clean:
	rm -rf $(COMPONENT_PATH_DIST)
	rm -rf components/dist

$(COMPONENT_PATH_DIST):
	mkdir -p $(COMPONENT_PATH_DIST)

# To make each transpiled file, compile the source file with the same name
# ie, components/$COMPONENT/index.js => components/$COMPONENT/dist/index.js
$(COMPONENT_PATH_DIST)/%.js: $(COMPONENT_PATH_DIST)
	$(BABEL) $(COMPONENT_PATH)/$(@F) \
		--ignore=node_modules,$(COMPONENT_PATH_DIST) \
		--presets=babel-preset-es2015,babel-preset-react \
		--plugins=babel-plugin-transform-object-rest-spread \
		| sed -n '/styles.scss/!p' \
		> $@

# To make each stylesheet, compile to css.
# @density/node-sass-json-importer is used to parse json files with variables inside. Learn more:
# https://github.com/DensityCo/node-sass-json-importer
# ie, charts/$COMPONENT/styles.scss => charts/$COMPONENT/dist/{_sass.scss,styles.css}
$(COMPONENT_PATH_DIST)/styles.css: $(COMPONENT_PATH_DIST)
	cp $(COMPONENT_PATH)/styles.scss $(COMPONENT_PATH_DIST)/_sass.scss
	$(NODE_SASS) \
		--importer node_modules/@density/node-sass-json-importer/dist/node-sass-json-importer.js \
		$(COMPONENT_PATH)/styles.scss \
		> $@
