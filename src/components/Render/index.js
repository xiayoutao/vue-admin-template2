<<<<<<< HEAD
export default {
	name: 'Render',
	functional: true,
	inheritAttrs: false,
	props: {
		render: Function,
		data: Object,
	},
	render(h, { props }) {
		const { data, render } = props;
		return render(h, {
			data,
		});
	},
};
=======
export default {
	name: 'Render',
	functional: true,
	inheritAttrs: false,
	props: {
		render: Function,
		data: Object,
	},
	render(h, { props }) {
		const { data, render } = props;
		return render(h, {
			data,
		});
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
