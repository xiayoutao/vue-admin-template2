<<<<<<< HEAD
/**
 * 选中文本
 */
export default {
	bind(el, options) {
		el.onclick = function () {
			const range = document.createRange();
			const selection = window.getSelection();
			range.selectNodeContents(el);
			selection.removeAllRanges();
			selection.addRange(range);
			if (options.arg === 'copy' && document.execCommand) {
				document.execCommand('Copy', true, null); // 复制选中的文本
			}
		};
	},
};
=======
/**
 * 选中文本
 */
export default {
	bind(el, options) {
		el.onclick = function () {
			const range = document.createRange();
			const selection = window.getSelection();
			range.selectNodeContents(el);
			selection.removeAllRanges();
			selection.addRange(range);
			if (options.arg === 'copy' && document.execCommand) {
				document.execCommand('Copy', true, null); // 复制选中的文本
			}
		};
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
