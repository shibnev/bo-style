# abs-center

### Description

_Mixin that helps absolutely position the block in the center_

### Parameters
- `$plane` - variable describing in which plane will the element be centered (***default ```null```***)

### Usage:
`$plane: null`:
```scss
.foo {
  @include abs-center();
}
```
_compiled into:_
```css
.foo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```
---
`$plane: 'x'`:
```scss
.foo {
  @include abs-center('x');
}
```
_compiled into:_
```css
.foo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```
---

`$plane: 'y'`:
```scss
.foo {
  @include abs-center('y');
}
```
_compiled into:_
```css
.foo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```
