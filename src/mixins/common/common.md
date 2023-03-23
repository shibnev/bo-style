# common

### Description
_All common css properties for write inline media queries_

### Usage:
```scss
.foo {
  @include width(('mob': 10px, 'xs': 20px));
  @include display(('mob': block, 'md': flex));
}
```
_compiled into:_
```css
.foo {
  width: 10px;
  display: block;
}

@media (min-width: 320px) {
  .foo {
    width: 20px;
  }
}

@media (min-width: 600px) {
  .foo {
    display: flex;
  }
}
```
