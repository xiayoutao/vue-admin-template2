<<<<<<< HEAD
export function getTableColumns() {
	return [
		{ type: 'selection', fixed: 'left' },
		{ prop: 'roleName', label: '角色名称' },
		{ prop: 'roleAlias', label: '角色别名' },
		{
			prop: 'status',
			label: '状态',
			width: 160,
			render(h, { cellValue }) {
				if (cellValue === 1) {
					return <span>启用</span>;
				}
				return <span>禁用</span>;
			},
		},
	];
}
=======
export function getTableColumns() {
	return [
		{ type: 'selection', fixed: 'left' },
		{ prop: 'roleName', label: '角色名称' },
		{ prop: 'roleAlias', label: '角色别名' },
		{
			prop: 'status',
			label: '状态',
			width: 160,
			render(h, { cellValue }) {
				if (cellValue === 1) {
					return <span>启用</span>;
				}
				return <span>禁用</span>;
			},
		},
	];
}
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
