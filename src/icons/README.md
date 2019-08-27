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
