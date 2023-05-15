# padding-x

### Description

_Mixin that helps write padding on plane X_

### Parameters
- `$left` - (***default ```0```***)
- `$right` - (***default ```$right```***)

### Example 1:
```scss
.foo {
    @include padding-x();
}
```
_compiled into:_
```css
.foo {
    padding-left: 0;
    padding-right: 0;
}
```
### Example 2:
```scss
.foo {
    @include padding-x(10px);
}
```
_compiled into:_
```css
.foo {
    padding-left: 10px;
    padding-right: 10px;
}
```
---
# padding-y

### Description
_Mixin that helps write padding on plane Y_
### Parameters
- `$top` - (***default ```0```***)
- `$bottom` - (***default ```$top```***)

examples such as the plane X
