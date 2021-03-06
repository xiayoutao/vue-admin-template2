<<<<<<< HEAD
import { Popover } from 'element-ui';

export default {
	name: 'BpPopover',
	functional: true,
	inheritAttrs: false,
	extends: Popover,
	data() {
		return {
			showPopper: false,
		};
	},
	methods: {
		popBy(el) {
			// 先隐藏并销毁之前显示的
			this.close();
			this.doDestroy(true);
			this.$nextTick(() => {
				//显示新的
				this.referenceElm = this.$refs.reference = el;
				this.showPopper = true;
				this.$emit('input', true);
			});
		},
		close() {
			this.showPopper = false;
			this.$emit('input', false);
		},
	},
};
=======
import { Popover } from 'element-ui';

export default {
	name: 'BpPopover',
	functional: true,
	inheritAttrs: false,
	extends: Popover,
	data() {
		return {
			showPopper: false,
		};
	},
	methods: {
		popBy(el) {
			// 先隐藏并销毁之前显示的
			this.close();
			this.doDestroy(true);
			this.$nextTick(() => {
				//显示新的
				this.referenceElm = this.$refs.reference = el;
				this.showPopper = true;
				this.$emit('input', true);
			});
		},
		close() {
			this.showPopper = false;
			this.$emit('input', false);
		},
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
