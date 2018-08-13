# Info Popup

This component displays an info icon that can render more detail when the user hovers over it.

![screenshot.png](screenshot.png)

A few attributes about it:
- It is tab-focusable - ie, pressing tab will toggle through it.
- It supports touch devices as well as devices with a cursor.

## Props
- `children: ReactElement | String` - The contents to render inside of the popup.
- `infoIconColor: string` - A hex color to use when coloring the info icon. Defaults to the value of
  brand primary.
