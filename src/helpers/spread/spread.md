# %spread

### Description

_Placeholder Selector that help you "spread" element_

### Example:
```scss
div {
  @extend %spread;
}
```
_compiled into:_
```css
div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```
