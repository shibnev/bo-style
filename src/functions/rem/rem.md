# rem

### Description

_Rem function that convert pixels to rem_

### Parameters
- `$values` - takes a values with pixels. If there is no "px" at the end of the value, the output will be the same.

### Example:
```scss
$rem-baseline: 18px !default;

html {
  font-size: $rem-baseline;
}

.foo {
  width: _rem(18px);
}
```
_compiled into:_
```css
.foo {
 width: 1rem;
}
```
