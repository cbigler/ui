# Grid System

Our grid system consists of sass mixins in an effort to encourage
[https://css-tricks.com/semantic-class-names/](semantic class names). The entire grid system is in
`_grid.scss`.


## Parts
Our grid system has a container, rows, and cells.

The mixin `grid-container` will create a container. Use it like this:
```scss
.my-page-container {
  @include grid-container;
}
```

```html
<div class="my-page-container">
  <!-- rows here -->
</div>
```

Rows were made to go inside containers. To add a row to the container, use the mixin `grid-row`:

```scss
.my-page-container {
  @include grid-container;
}
.my-row {
  @include grid-row;
}
```

```html
<div class="my-page-container">
  <div class="my-row">
    <!-- cells here -->
  </div>
</div>
```

Finally, cells were made to go inside rows. To define a cell, use the mixin `grid-width`. The mixin
takes four parameters, the width on xs, sm, md and lg in columns. For example: the below makes two
half-width columns on desktop that become full width on mobile:

```scss
.my-page-container {
  @include grid-container;
}
.my-row {
  @include grid-row;
}
.my-half-width-cell {
  @include grid-width(24, 24, 12, 12);
}
```

```html
<div class="my-page-container">
  <div class="my-row">
    <div class="my-half-width-cell"> 1/2 width </div>
    <div class="my-half-width-cell"> 1/2 width </div>
  </div>
</div>
```

### Why this way over mixins for each breakpoint?
1. Defining all in one statement means you have to think about each, which helps eliminate bugs.
2. If the individual mixins are used in the wrong order, then they break. If there's only one mixin,
   then the order will always be correct.
