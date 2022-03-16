# margin-x

### Description

_Mixin that helps write margin on plane X_

### Parameters
- `$left` - (***default ```auto```***)
- `$right` - (***default ```$right```***)

### Example 1:
```scss
.foo {
    @include margin-x();
}
```
_compiled into:_
```css
.foo {
    margin-left: auto;
    margin-right: auto;
}
```
### Example 2:
```scss
.foo {
    @include margin-x(10px);
}
```
_compiled into:_
```css
.foo {
    margin-left: 10px;
    margin-right: 10px;
}
```
---
# margin-y

### Description
_Mixin that helps write margin on plane Y_
### Parameters
- `$top` - (***default ```auto```***)
- `$bottom` - (***default ```$top```***)

examples such as the plane X