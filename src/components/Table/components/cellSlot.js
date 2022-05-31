<<<<<<< HEAD
/**
 * 为了实现表格自定义字段显示，需要用到render
 */
export default {
	name: 'cellSlot',
	functional: true,
	props: {
		index: Number,
		render: Function,
		row: Object,
		column: Object,
	},
	render(h, { props }) {
		const { index, row, column, render } = props;
		const property = column.property || column.prop;
		return render(h, {
			index, // 索引值
			row, // 当前行的值
			column, // 当前列的值
			cellValue: row[property], // 当前单元格的值
		});
	},
};
=======
/**
 * 为了实现表格自定义字段显示，需要用到render
 */
export default {
	name: 'cellSlot',
	functional: true,
	props: {
		index: Number,
		render: Function,
		row: Object,
		column: Object,
	},
	render(h, { props }) {
		const { index, row, column, render } = props;
		const property = column.property || column.prop;
		return render(h, {
			index, // 索引值
			row, // 当前行的值
			column, // 当前列的值
			cellValue: row[property], // 当前单元格的值
		});
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
