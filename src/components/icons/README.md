# Density UI Icons

> "Densicons"

## Usage

Install the icons package into whatever project you'd like:
```
npm install @density/ui-icons
```

Use the icon:
```
import { IconImageUpload } from '@density/ui-icons';

// In a react component:
<IconImageUpload />

// With a special color
<IconImageUpload color="primary" />
<IconImageUpload color="#e59da1" />

// With a special size (in pixels)
<IconImageUpload width={14} height={14} />
```

## Adding icons

## From sketch
![sketch-svg.png](sketch-svg.png)

1. Find `densicons.sketch` within Density's Google Drive.
2. In the sketch sidebar, right click on each icon and select Copy SVG Code.
3. Paste the resulting svg into the left pane of this tool: https://svg2jsx.herokuapp.com. Copy the output from the right pane.
4. Add the icon to the `ICONS` object in components/icons/index.js, where the key is the component
   name and the value is a function that accepts any props that can be passed to the component and
   returns the resulting jsx from the svg2jsx tool (parameterized with any props that would be
   desired)

Example of step 4:
```javascript
const ICONS = {
  /* ... */
  IconMyCrazyNewThing: ({color, width, height}) => <svg width={width || 18} height={height || 18}>...</svg>,
  /* ... */
};
```
