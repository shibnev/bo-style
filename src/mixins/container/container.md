# container

### Description
_Mixin that helps to create container_

### Parameters
- `$max-width` - max width of container (***required***)
- `$padding` - padding of container (***required***)

### Example:
```scss
$min-max: 'min' !default;
$breakpoints: ('mob': 0, 'xs': 600px) !default;

.container {
  @include container(1000px, ('mob': 10px, 'xs': 14px));
}
```
_compiled into:_
```css
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 972px;
  width: 100%;
  height: 100%;
  position: relative;
}

@media (min-width: 600px) {
  .container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

```