<template>
	<div>
		<car-render :editable="true" :data="car" :menuList="menuList"></car-render>
	</div>
</template>

<script>
import CarRender from '@cps/CarRender';

export default {
	components: {
		CarRender,
	},
	data() {
		return {
			menuList: [
				{
					type: 'install',
					text: '安装',
					disabled(data) {
						const { tyreList = [] } = data;
						return tyreList.length > 0;
					},
					handler: null,
				},
				{
					type: 'uninstall',
					text: '卸载',
					disabled(data) {
						const { tyreList = [] } = data;
						return tyreList.length === 0;
					},
					handler: null,
				},
				{
					type: 'transposition',
					text: '换位',
					disabled(data) {
						const { tyreList = [] } = data;
						return tyreList.length === 0;
					},
					handler: null,
				},
			],
			car: [
				{
					id: '1',
					isDrive: false, // 是否驱动
					isTurn: false, // 是否转向
					isDouble: false, // 是否双胎
					isRetread: false, // 是否翻新
					tyreList: [],
				},
				{
					id: '2',
					isDrive: true, // 是否驱动
					isTurn: true, // 是否转向
					isDouble: true, // 是否双胎
					isRetread: false, // 是否翻新
					tyreList: [1, 2],
				},
				{
					isDrive: false, // 是否驱动
					isTurn: false, // 是否转向
					isDouble: true, // 是否双胎
					isRetread: true, // 是否翻新
					tyreList: [1, 2],
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
