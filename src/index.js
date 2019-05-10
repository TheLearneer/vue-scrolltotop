import ScrollToTopComponent from './ScrollToTop.vue';

const ScrollToTop = {
	install(Vue) {
		Vue.component(ScrollToTopComponent.name, ScrollToTopComponent);
	}
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ScrollToTop)
}

export default ScrollToTop;
