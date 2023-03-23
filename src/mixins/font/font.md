# font

### Description
_Mixin that helps to write font styles_

### Parameters
- `$font-size`
- `$line-height`
- `$font-weigh`
- `$letter-spacing`
- `$font-family`
- `$font-style`

### Usage:
```scss
.foo {
    @include font(10px, 1, 300, 2px, 'Roboto', normal);
}
```
_compiled into:_
```css
.foo {
    font-size: 10px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 2px;
    font-family: 'Roboto';
    font-style: normal;
}
```
