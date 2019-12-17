# Density UI Icons

> "Densicons"

## Usage

Install the ui package into whatever project you'd like:
```
npm install @density/ui
```

Use the icon:
```
import { Icons } from '@density/ui';

// In a react component:
<Icons.ImageUpload />

// With a special color
<Icons.ImageUpload color="primary" />
<Icons.ImageUpload color="#e59da1" />

// With a special size (in pixels)
<Icons.ImageUpload width={14} height={14} />
```

## Converting icons from SVG

```
./utilities/convert-icon ~/path/to/icon-name.svg IconName
```

## Using Gus's Convenient Icon to SVG stuff
1. add a react component here: https://github.com/DensityCo/ui/tree/trunk/src/icons in the correct folder
2. to convert SVG, use this: https://github.com/DensityCo/ui/blob/trunk/utilities/convert-icon
3. add an import to the index file: https://github.com/DensityCo/ui/blob/trunk/src/icons/index.tsx

Let gus know if you have any questions
