<script>
export default {
	props: {
		data: Object, // 数据
		active: String, // 当前选中项的值
		index: Number, // 车轴索引
		position: String, // 轮胎位置，左右
		num: String, // 轮胎数目，左1，左2，右1，右2
		code: String,
		handleClick: Function,
		handleContextmenu: Function,
	},
	render() {
		const { code, data, active, handleClick, handleContextmenu } = this;
		const { tyreList = [] } = data;
		return (
			<span
				class={{
					tyre: true,
					'is-turn': data.isTurn,
					'is-retread': data.isRetread,
					'is-active': active === code,
					'is-empty': tyreList.length === 0,
				}}
				onClick={(event) => handleClick(event, code, data)}
				onContextmenu={(event) => handleContextmenu(event, data, code)}
			></span>
		);
	},
};
</script>

<style lang="scss" scoped>
.tyre {
	@include flex-row(center, center);
	position: relative;
	width: 35px;
	height: 84px;
	margin: 0 5px;
	color: #f3c50f;
	font-size: 0;
	line-height: 30px;
	word-wrap: break-word;
	background: url('/img/car/tyre.png') no-repeat center;
	background-size: 100% 100%;
	writing-mode: vertical-rl;
	transition: all 0.3s;
	user-select: none;

	&:not(.is-empty) {
		&:after {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 20px;
			background-color: rgba(#05b5ff, 0.54);
			opacity: 0;
			transition: all 0.15s;
			content: '';
		}
		&.is-active {
			&:after {
				opacity: 1;
			}
		}
	}
	&.is-turn {
		transform: rotate(15deg);
	}
	&.is-empty {
		background-image: url('/img/car/tyre-empty.png');

		&.is-active {
			background-image: url('/img/car/tyre-empty-selected.png');
		}
	}
	&.is-retread {
		background-image: url('/img/car/tyre-retread.png');

		// &.is-active {
		// 	background-image: url('/img/car/tyre-retread-selected.png');
		// }
	}
}
</style>
