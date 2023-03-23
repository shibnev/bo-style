# scss boilerplate

install package
```bash
yarn add bo_style -D
```

## usage
1. create config like this [default-config](https://github.com/shibnev/bo-style/blob/master/default-config.scss)
2. import package and your config

```scss
@import 'bo_style';
@import './your-config.scss';
```

simple example, how to use:
```scss
$rem-baseline: 18px;
$breakpoints: ('mob': 0, 'xs': 600px, 'xl': 1200px);

.div {
  @include width(('mob': 20px, 'xl': 300px));
  @include display(('mob': block, 'xs': flex));
}
```
compiles to:
```css
.div {
  width: 1.111rem;
  display: block;
}

@media (min-width: 600px) {
  .div {
    display: flex;
  }
}

@media (min-width: 1200px) {
  .div {
    width: 16.667rem;
  }
}
```

---
## list of mixins, functions and placeholders

### _
- [Main Mixin - _](https://github.com/shibnev/bo-style/blob/master/src/_/_.md)

### mixins
- [abs-center](https://github.com/shibnev/bo-style/blob/master/src/mixins/abs-center/abs-center.md)
- [circle](https://github.com/shibnev/bo-style/blob/master/src/mixins/circle/circle.md)
- [common](https://github.com/shibnev/bo-style/blob/master/src/mixins/common/common.md)
- [container](https://github.com/shibnev/bo-style/blob/master/src/mixins/container/container.md)
- [font](https://github.com/shibnev/bo-style/blob/master/src/mixins/font/font.md)
- [margin-(x/y)](https://github.com/shibnev/bo-style/blob/master/src/mixins/margin/margin.md)
- [padding-(x/y)](https://github.com/shibnev/bo-style/blob/master/src/mixins/padding/padding.md)
- [pseudo](https://github.com/shibnev/bo-style/blob/master/src/mixins/pseudo/pseudo.md)
- [wh](https://github.com/shibnev/bo-style/blob/master/src/mixins/wh/wh.md)

### functions
- [mq](https://github.com/shibnev/bo-style/blob/master/src/functions/mq/mq.md)
- [rem](https://github.com/shibnev/bo-style/blob/master/src/functions/rem/rem.md)

### helpers
- [btn-reset](https://github.com/shibnev/bo-style/blob/master/src/helpers/btn-reset/btn-reset.md)
- [full-size](https://github.com/shibnev/bo-style/blob/master/src/helpers/full-size/full-size.md)
- [list-reset](https://github.com/shibnev/bo-style/blob/master/src/helpers/list-reset/list-reset.md)
- [spread](https://github.com/shibnev/bo-style/blob/master/src/helpers/spread/spread.md)

---
#### TODO

- [ ] [sassdoc](http://sassdoc.com/)
- [ ] mixins with breakpoints(wh, abs-center e.t.c)