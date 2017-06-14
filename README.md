# Density UI

Density UI is a collection of Density-branded controls and styles for use in web projects.

A built storybook can be found [here](https://densityco.github.com/ui/master) with usage examples
for each react component.

## How it works

Each component has a number of different files:
- `index.js` contains the code to render the markup of a component in a react context. Its default
  export is the component.
- `stories.js` contains a number of stories used to render the component in different states. Think
  of these like visual tests that one can quickly run through to determine if a component is
  working.
- `styles.scss` contains all styles required to render the ui component, implemeted primarily as
  mixins. [More details](#styles)
- `variables.json` defines a number of display-related variables (such as colors, spacings, and
  flags) that would be handy to be able to access from both javascript and scss. By defining our
  variables in a generic data format it's readable from any system.

## Styles

Styles are written in Sass. Each component has a mixin that implements the construction of the
component, and creates a class that uses the mixin. Something like this:

```scss
@mixin make-list($spacing: 20px) {
  margin-top: $spacing;
  margin-bottom: $spacing;
}

.list {
  @include make-list;
}
```

Advantages to this strategy:
- The intention is to use mixins as the primary method for applying styles to rendered html, not
  classes. This will hopfully allow us to embrace [symantic class
  names](https://css-tricks.com/semantic-class-names/).
- Since Sass isn't used everywhere and components rendered by react expect classes to exist, class
  names are still created by each component's stylesheet.
- The mixin makes it very clear what common configurable parameters each component has.

Here's a usage example of the above styles:

```
// Markup
<ul class="capture-list">
  <li>...</li>
  <li>...</li>
</ul>

// SCSS
.capture-list {
  @include make-list;
}
```

## Variables

Within a node (or bundler) context, the `require` function can be used to [import
json](https://stackoverflow.com/questions/7163061/is-there-a-require-for-json-in-node-js). However,
there's no way in vanilla Sass to do the same thing.

However, we were able to adapt [this plugin](https://github.com/Updater/node-sass-json-importer) to
let us solve this problem! At a high level, the plugin co-opts Sass's `@import` directive to work on
json files as well as sass and css. We've also added a couple handy features:

- Convert `camelCaseKeys` in json to `kabob-case-variables` inside of sass to match language
  conventions.
- If the value of a key is numeric, then the value is in units of pixels. Previously, numbers were
  brought into the styles as just raw numbers and this caused some issues.

## Component Specifications
In addition, a `spec.html` is auto generated from the react component definition using [server-side
rendering](https://facebook.github.io/react/docs/react-dom-server.html). It's important we have only
one source of truth, and there's a likelyhood especially after a while that either the spec or the
react component will be forgotten when an update happens, causing inconsistencies.

## "Marionetting" server-side rendered components
If a component requires scripting to make itself work, seriously consider writing code in the
component to provide interactivity to those who render ui components serverside. Most likely (since
ui components should be kept simple) it should be pretty basic.

# Writing a UI component

In general, try to follow these guidelines:

- Use stateless components. If that's going to be difficult for a particular component, then
  consider writing a stateless version that is wrapped by a stateful component, and exporting both.
  Especially with redux, ui components with internal state managed within themselves should be
  discouraged.

- Keep ui components as simple as possible and don't be afraid to break apart components into
  smaller, more composable components.

- If building a static site, give react's server-side rendering a try, especially if you were
  thinking of using a templating engine like nunjucks or handlebars anyway. It makes using our
  components much simpler and abstracts away the details of manually creating markup. In addition,
  if implementation changes behind the scenes, your project is able to adapt without having to
  rework the ui. [Here's an example. It's actually really easy to
  use!](https://github.com/DensityCo/ui/blob/master/utils/build-specs.js)


# How the build script works

Each component is a seperate package.

## Building javascript
All javascript files are transpiled by babel in such a way that `*.js` => `dist/*.js`. Not really
much of interest going on here.

## Building sass
1. First, the `styles.scss` is transpiled into `dist/styles.css`. This is to be used in non-sass
   projects, and can be imported like so from the parent project:

```scss
@import "./node_modules/@density/ui-COMPONENT/dist/styles.css";

// Using nicss or webpack or something that resolves the `style` key in the package.json?
// Do this instead:
@import "@density/ui-COMPONENT";
```

2. Next, the `styles.scss` is run through a transformation that strips out all json imports from the
   component's scss. This is done so that parent projects can use whatever variable values it'd
   like and not strictly couple the values to density ui (ie, so child projects can override them)>

So this:

```scss
@import "variables.json";
@mixin make-foo {}
.foo { @include make-foo; }
```

is converted to this:

```scss
@mixin make-foo($color: wheat) {
  color: $color;
}
.foo { @include make-foo; }
```

The output of this transformation is copied to `dist/_sass.scss`. Within the parent project, the
variables are to be separately defined / imported, and each component uses what it needs:

```scss
// my-project-styles.scss

// First, bring in all variables from density ui.
@import "@density/ui/variables/colors.json";
@import "@density/ui/variables/spacing.json";
// ... you get it ...

// Then, bring in the variables for the density ui components you need:
@import "@density/ui-COMPONENT/variables.json";

// Finally, bring in the stylesheet without variables included (variables were included previously):
@import "@density/ui-COMPONENT/dist/sass";

// At this point, mixins are available:
.my-custom-foo {
  @include make-foo(crimson);
}
```


# Adding Density UI to a project

## 1. Install Density UI:

```sh
yarn add @density/ui@~4.0.0
# or:
npm i -S @density/ui@~4.0.0
```

## 2. Are you using css or sass?

### CSS

This is pretty easy. Just include the css file `./node_modules/@density/ui/dist/styles.css` to get
all the non-component related styles (ie, the font, the grid system, a clearfix, etc...)

Also, don't forget to add a css reset! This project is built off of `normalize.css`.

To add component styles, install the respective package for that component (such as
`@density/ui-navbar`), and add them for each component from
`./node_modules/@density/ui-COMPONENT/dist/styles.css`.


### SCSS

This is more difficult, but still not too bad:

1. First, install a sass compiler importer addon to allow sass to import variables from json files.
   (Throughout the project we utilize json files to store common ui constants so they are importable
   from both stylesheets and javascript)

```scss
yarn add @density/node-sass-json-importer
# or:
npm i -S @density/node-sass-json-importer
```

Follow the directions in that repository to add the plugin to your sass workflow, whether it be
webpack, command line, or based on something else.

2. Next, create a stylesheet in your project to hold all Density UI imports and install the css
   reset:

```sh
mkdir styles/density-ui.scss
yarn add normalize.css
# or:
npm i -S normalize.css
```

Then, import variables and styles provided by the main Density UI package:

```
// styles/density-ui.scss
// 
// Density UI Styles
// 

// CSS Reset
@import "../node_modules/normalize.css/normalize.css";

// Global variables like colors, spacings, etc from @density/ui
@import "../node_modules/@density/ui/variables/colors.json";
@import "../node_modules/@density/ui/variables/spacing.json";

// Global styles like our font, grid system and more from @density/ui
@import "../node_modules/@density/ui/styles/font";
@import "../node_modules/@density/ui/styles/clearfix";
@import "../node_modules/@density/ui/styles/grid";

// Local styles for individual components from @density/ui-*:

// For example, here's a navbar. All components follow the pattern of requiring variables and
// requiring it's uncompiled sass.
@import "../node_modules/@density/ui-navbar/variables.json";
@import "../node_modules/@density/ui-navbar/dist/sass";
```

3. Use your components, and if you want to customize one, use the mixin:

```
<Navbar type="my-navbar" />

.my-navbar {
  @include make-navbar; // Mixins follow the pattern make-COMPONENT
}
```
