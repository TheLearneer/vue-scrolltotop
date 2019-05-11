# Vue Scrolltotop
Component for Vue.js which scrolls the page to the top when clicked.

## Install
```bash
npm i TheLearneer/vue-scrolltotop
```

## Import and Use
Import for global usage
```javascript
import Vue from 'vue'
import ScrollToTop from 'vue-scrolltotop'

Vue.use(ScrollToTop)
...
```

Or on a single component
```javascript
import ScrollToTop from 'vue-scrolltotop'
...
},
components: { ScrollToTop }
...
```

## Props

| Name                    | Type             | Default      | Description                                                              |
|-------------------------|------------------|--------------|--------------------------------------------------------------------------|
| visibleOffset           | Number           | 300          | Where the component should visible when user scroll reach certain offset |
| bottom                  | String           | 20px         | Bottom position of the component                                         |
| right                   | String           | 20px         | Right position of the component                                          |

## How to use

The button to scroll to top become visible at window scroll at 300 > px. If you want to change this value, pass a property named "visibleOffset" with a number value.
```html
<ScrollToTop visibleoffset=500 />
```

You can also specify the position where the button is seen with the bottom and right padding.
```html
<ScrollToTop bottom="50px" right="50px" />
```

Now, it's possible to use your own html/vue component inside vue-backtotop component
```html
<!-- in your template -->
<ScrollToTop bottom="50px" right="50px">
  <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
</ScrollToTop>
```

```css
/* in your css */
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
```

## Credits
- [vue-backtotop](https://github.com/caiofsouza/vue-backtotop) :: Inspiration for this package.
- Few online vue plugin development tutorials that helped me build this plugin on the very second day I learnt Vuejs.
