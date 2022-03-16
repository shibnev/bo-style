# mq

### Description

_mq function that help you write @media_

### Parameters
- `$width-name` - key of object $breakpoints
### Out parameters
- `$min-max` - what type of media min or max
- `$breakpoints` - object of keys(names of media) and values

### Example:
```scss
$min-max: 'min' !default;
$breakpoints: ('mob': 0, 'xs': 600px, 'md': 1280px, 'lg': 1900px) !default;

div {
  width: 10px;
  
  @media #{mq('xs')} {
    width: 20px;
  }
}

```
_compiled into:_
```css
div {
    width: 10px;
}

@media (min-width: 600px) {
  div {
    width: 20px;
  }
}
```
