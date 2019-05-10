<template>
	<transition name="fade-slide" mode="out-in" appear>
		<div class="colum is-four-fifths">
			<div id="scroll-top" title="scroll to top" @click="scrollTop" :style="this.style">
				<slot>
					<div id="scroll-custom" class="button is-info is-rounded">
						<p>Scroll To Top</p><b-icon icon="fa fa-arrow-up" />
					</div>
				</slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'ScrollToTop',
	props: {
		visibleOffset: {
			type: Number,
			default: 300
		},
		right: {
			type: String,
			default: '20px'
		},
		bottom: {
			type: String,
			default: '20px'
		}
	},
	data() {
		return {
			visible: false,
			style: {
				bottom: this.bottom,
				right: this.right,
				position: 'fixed',
				transition: 'opacity 0.5s, background 0.3s',
				opacity: 0				
			}
		};
	},
	mounted() {
		this.$nextTick(() => {
			const scroller = document.getElementById('scroll-top');
			let hideTimeout;
			let showTimeout;
			const showListener = () => {
				if ((window.pageYOffset || document.documentElement.scrollTop) > this.visibleOffset) {
					clearTimeout(hideTimeout);
					clearTimeout(showTimeout);
					scroller.style.display = 'block';
					showTimeout = setTimeout(() => { scroller.style.opacity = '1'; }, 20);
					window.removeEventListener('scroll', showListener);
					window.addEventListener('scroll', hideListener);
				}
			};
			const hideListener = () => {
				if ((window.pageYOffset || document.documentElement.scrollTop) < this.visibleOffset) {
					clearTimeout(hideTimeout);
					clearTimeout(showTimeout);
					scroller.style.opacity = '0';
					hideTimeout = setTimeout(() => { scroller.style.display = 'none'; }, 1000);
					window.removeEventListener('scroll', hideListener);
					window.addEventListener('scroll', showListener);
				}
			};
			window.addEventListener('scroll', showListener);
		});
	},
	methods: {
		toggle() {
			this.visible = !this.visible;
		},
		scrollTop() {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style>
#scroll-custom {
	background: #1f2938;
}

#scroll-custom:hover {
	background: #434b56;
}
</style>
