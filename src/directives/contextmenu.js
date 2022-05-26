// 主要源代码 (自定义指令)

function handleContext(e) {
	e.preventDefault();
	const { contextMenu, binding, vm } = this;
	const ul = document.createElement('ul');
	const target = e.target;

	binding.value.map((option, index) => {
		const li = document.createElement('li');
		li.innerText = option.text;
		li.className = 'contextmenu-child';
		// vm.context是使用了v-contextmenu指令的上下文环境
		li.onclick =
			option &&
			option.handler &&
			option.handler.bind(vm && vm.context, li, index, target);
		ul.appendChild(li);
	});
	contextMenu.appendChild(ul);

	// const menuWidth = 100
	// contextMenu.style.width = `${menuWidth}px`
	// 动态获取menu高度和宽度
	const menuHeight = +window
		.getComputedStyle(contextMenu)
		.height.replace(/px/, '');
	const menuWidth = +window
		.getComputedStyle(contextMenu)
		.width.replace(/px/, '');

	// horizontal
	if (e.clientX + menuWidth >= window.innerWidth) {
		contextMenu.style.left = `${e.clientX - menuWidth}px`;
	} else {
		contextMenu.style.left = `${e.clientX}px`;
	}

	if (e.clientY + menuHeight >= window.innerHeight) {
		contextMenu.style.top = `${e.clientY - menuHeight}px`;
	} else {
		contextMenu.style.top = `${e.clientY}px`;
	}
	document.body.appendChild(contextMenu);
	contextMenu.style.visibility = 'visible';
	window.addEventListener('click', cb);

	// 判断点击是否在元素外部
	function cb(e) {
		const is_inner = contextMenu.contains(e.target);
		const is_menu_child = e.target.className === 'contextmenu-child';
		if (!is_inner || is_menu_child) {
			contextMenu.style.visibility = 'hidden';
			contextMenu.removeChild(ul);
			document.body.removeChild(contextMenu);
			window.removeEventListener('click', cb);
		}
	}
}

let opt = {};

export default {
	inserted(el, binding, vm) {
		const contextMenu = document.createElement('div');
		contextMenu.className = 'contextmenu';

		opt = { contextMenu, el, binding, vm };
		el.addEventListener('contextmenu', handleContext.bind(opt));
	},
	unbind(el) {
		el.removeEventListener('contextmenu', handleContext.bind({}));
	},
};
