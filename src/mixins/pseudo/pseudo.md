# pseudo

### Description

_Mixin that helps write pseudo-elements like `after` and `before`_

### Parameters
- `$type` - (***default ```after```***)
- `$content` - (***default ```''```***)

### Example 1:
```scss
.foo {
    @include pseudo();
}
```
_compiled into:_
```css
.foo::after {
    display: block;
    content:'';
}
```
### Example 2:
```scss
.foo {
    @include pseudo('before', 'bar') {
        position: absolute;
    };
}
```
_compiled into:_
```css
.foo::before {
    display: block;
    content: 'bar';
    position: absolute;
}
```
