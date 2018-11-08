# App Bar

The App Bar is the highest level navigation within an application

## Mobile usage
The navbar has a prop that can be passed to it called `mobileSidebar` - this prop expects a function
that returns a list of `NavbarMobileItem` components. Here's an example:

```javascript
<Navbar mobileSidebar={(closeSidebar, openSidebar) => [
  {/* Mobile navbar items: */}
  <NavbarMobileItem />,
  <NavbarMobileItem />,
  <NavbarMobileItem />,
]}>
  {/* Normal navbar items: */}
  <NavbarItem />
  <NavbarItem />
  <NavbarItem />
</Navbar>
```

Also, two callbacks are passed to the `mobileSidebar` function: one to open the sidebar and one to
close the sidebar. Here's one in action:

```javascript
<Navbar mobileSidebar={(closeSidebar, openSidebar) => [
  {/* When the user clicks the first item in the sidebar, close the sidebar. */}
  <NavbarMobileItem onClick={closeSidebar} />,
  <NavbarMobileItem />,
  <NavbarMobileItem />,
]}>
  {/* Normal navbar items: */}
  <NavbarItem />
  <NavbarItem />
  <NavbarItem />
</Navbar>
```
