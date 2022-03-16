# circle

### Description
_Mixin that helps to transform an element into a circle_

### Parameters
- `$wh` - variable describing width and height (***required***)

### Usage:
```scss
.foo {
  @include circle(10px);
}
```
_compiled into:_
```css
.foo {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
```
