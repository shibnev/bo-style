# wh

### Description

_Mixin that helps set width and height of element_

### Parameters
- `$width` - variable describing width (***required***)
- `$height` - variable describing height (***default `$width`***)

### Example:
```scss
.foo {
  @include wh(10px);
}
```
_compiled into:_
```css
.foo {
  width: 10px;
  height: 10px;
}
```
