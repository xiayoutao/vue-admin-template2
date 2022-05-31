<<<<<<< HEAD
<script>
import Tyre from './tyre.vue';
export default {
	name: 'CarRender',
	components: {
		Tyre,
	},
	props: {
		zoom: Number,
		data: Array,
		editable: Boolean,
		menuList: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			contextmenuVisible: false,
			active: '',
			positon: [],
			operateData: {},
		};
	},
	computed: {
		pageRoot() {
			return document.querySelector('#PageRoot');
		},
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('click', this.hideContextmenu);
			this.pageRoot.addEventListener('mouseleave', this.hideContextmenu);
		});
	},
	beforeDestroy() {
		window.removeEventListener('click', this.hideContextmenu);
		this.pageRoot.removeEventListener('mouseleave', this.hideContextmenu);
	},
	methods: {
		hideContextmenu() {
			this.contextmenuVisible = false;
		},
		handleTyreClick(event, code) {
			if (!this.editable) return;
			if (this.active !== code) {
				this.active = code;
			} else {
				this.active = '';
			}
		},
		rightClick(event, data, code) {
			if (!this.editable) return;
			event.preventDefault();
			this.active = code;
			this.operateData = { ...data };

			this.contextmenuVisible = true;
			this.$nextTick(() => {
				const { clientX, clientY } = event;
				const { width, height } = this.$el
					.querySelector('.contextmenu')
					.getBoundingClientRect();

				const { width: wrapperWidth, height: wrapperHeight } =
					document.body.getBoundingClientRect();

				let left = clientX;
				let top = clientY;

				if (left + width >= wrapperWidth) {
					left = wrapperWidth - width;
				}
				if (top + height >= wrapperHeight) {
					top = wrapperHeight - height;
				}

				this.positon = [left, top];
			});
		},
	},
	render() {
		const {
			contextmenuVisible,
			editable,
			data,
			active,
			menuList,
			positon,
			operateData,
			handleTyreClick,
			rightClick,
		} = this;
		console.log('menuList', menuList);

		return (
			<div>
				<div
					class={{
						'car-render': true,
						editable: editable,
					}}
					style={{ zoom: this.zoom }}
				>
					{data.map((item, index) => {
						return (
							<div class="axle-item">
								{item.isDouble && (
									<tyre
										data={item}
										active={active}
										code={`left_${index}_2`}
										handleClick={handleTyreClick}
										handleContextmenu={rightClick}
									/>
								)}
								<tyre
									data={item}
									active={active}
									code={`left_${index}_1`}
									handleClick={handleTyreClick}
									handleContextmenu={rightClick}
								/>
								<div
									class={{ 'axle-line': true, 'is-drive': item.isDrive }}
								></div>
								<tyre
									data={item}
									active={active}
									code={`right_${index}_1`}
									handleClick={handleTyreClick}
									handleContextmenu={rightClick}
								/>
								{item.isDouble && (
									<tyre
										data={item}
										active={active}
										code={`right_${index}_2`}
										handleClick={handleTyreClick}
										handleContextmenu={rightClick}
									/>
								)}
							</div>
						);
					})}
				</div>
				<context-menu
					v-show={contextmenuVisible}
					menu-data={menuList}
					position={positon}
					data={operateData}
					onClose={() => {
						this.contextmenuVisible = false;
					}}
					nativeOnContextmenu={(event) => {
						event.preventDefault();
					}}
				></context-menu>
			</div>
		);
	},
};
</script>

<style lang="scss" scoped>
.car-render {
	position: relative;
	display: inline-block;
	zoom: 1;

	&:not(.editable) {
		cursor: pointer;
	}
	&.editable {
		/deep/ .tyre {
			cursor: pointer;
		}
	}

	&:before {
		position: absolute;
		top: 48px;
		bottom: 48px;
		left: 50%;
		width: 8px;
		background-color: #09090d;
		transform: translateX(-50%);
		content: '';
	}
	.axle-item {
		@include flex-row(center, center);
		position: relative;
		padding: 10px 0;

		.axle-line {
			width: 188px;
			height: 44px;
			background: url('/img/car/axle.png') no-repeat center;
			background-size: 100% 30px;

			&.is-drive {
				background-image: url('/img/car/axle-drive.png');
				background-size: 100% 44px;
			}
		}
	}
}
</style>
=======
<script>
import Tyre from './tyre.vue';
export default {
	name: 'CarRender',
	components: {
		Tyre,
	},
	props: {
		zoom: Number,
		data: Array,
		editable: Boolean,
		menuList: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			contextmenuVisible: false,
			active: '',
			positon: [],
			operateData: {},
		};
	},
	computed: {
		pageRoot() {
			return document.querySelector('#PageRoot');
		},
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('click', this.hideContextmenu);
			this.pageRoot.addEventListener('mouseleave', this.hideContextmenu);
		});
	},
	beforeDestroy() {
		window.removeEventListener('click', this.hideContextmenu);
		this.pageRoot.removeEventListener('mouseleave', this.hideContextmenu);
	},
	methods: {
		hideContextmenu() {
			this.contextmenuVisible = false;
		},
		handleTyreClick(event, code) {
			if (!this.editable) return;
			if (this.active !== code) {
				this.active = code;
			} else {
				this.active = '';
			}
		},
		rightClick(event, data, code) {
			if (!this.editable) return;
			event.preventDefault();
			this.active = code;
			this.operateData = { ...data };

			this.contextmenuVisible = true;
			this.$nextTick(() => {
				const { clientX, clientY } = event;
				const { width, height } = this.$el
					.querySelector('.contextmenu')
					.getBoundingClientRect();

				const { width: wrapperWidth, height: wrapperHeight } =
					document.body.getBoundingClientRect();

				let left = clientX;
				let top = clientY;

				if (left + width >= wrapperWidth) {
					left = wrapperWidth - width;
				}
				if (top + height >= wrapperHeight) {
					top = wrapperHeight - height;
				}

				this.positon = [left, top];
			});
		},
	},
	render() {
		const {
			contextmenuVisible,
			editable,
			data,
			active,
			menuList,
			positon,
			operateData,
			handleTyreClick,
			rightClick,
		} = this;
		console.log('menuList', menuList);

		return (
			<div>
				<div
					class={{
						'car-render': true,
						editable: editable,
					}}
					style={{ zoom: this.zoom }}
				>
					{data.map((item, index) => {
						return (
							<div class="axle-item">
								{item.isDouble && (
									<tyre
										data={item}
										active={active}
										code={`left_${index}_2`}
										handleClick={handleTyreClick}
										handleContextmenu={rightClick}
									/>
								)}
								<tyre
									data={item}
									active={active}
									code={`left_${index}_1`}
									handleClick={handleTyreClick}
									handleContextmenu={rightClick}
								/>
								<div
									class={{ 'axle-line': true, 'is-drive': item.isDrive }}
								></div>
								<tyre
									data={item}
									active={active}
									code={`right_${index}_1`}
									handleClick={handleTyreClick}
									handleContextmenu={rightClick}
								/>
								{item.isDouble && (
									<tyre
										data={item}
										active={active}
										code={`right_${index}_2`}
										handleClick={handleTyreClick}
										handleContextmenu={rightClick}
									/>
								)}
							</div>
						);
					})}
				</div>
				<context-menu
					v-show={contextmenuVisible}
					menu-data={menuList}
					position={positon}
					data={operateData}
					onClose={() => {
						this.contextmenuVisible = false;
					}}
					nativeOnContextmenu={(event) => {
						event.preventDefault();
					}}
				></context-menu>
			</div>
		);
	},
};
</script>

<style lang="scss" scoped>
.car-render {
	position: relative;
	display: inline-block;
	zoom: 1;

	&:not(.editable) {
		cursor: pointer;
	}
	&.editable {
		/deep/ .tyre {
			cursor: pointer;
		}
	}

	&:before {
		position: absolute;
		top: 48px;
		bottom: 48px;
		left: 50%;
		width: 8px;
		background-color: #09090d;
		transform: translateX(-50%);
		content: '';
	}
	.axle-item {
		@include flex-row(center, center);
		position: relative;
		padding: 10px 0;

		.axle-line {
			width: 188px;
			height: 44px;
			background: url('/img/car/axle.png') no-repeat center;
			background-size: 100% 30px;

			&.is-drive {
				background-image: url('/img/car/axle-drive.png');
				background-size: 100% 44px;
			}
		}
	}
}
</style>
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
