<<<<<<< HEAD
export default {
	state: {
		sidebarFold: false,
		pageHeight: 0,
	},
	getters: {
		sidebarFold: (state) => state.sidebarFold,
		pageHeight: (state) => state.pageHeight,
	},
	mutations: {
		toggleSideBar(state) {
			state.sidebarFold = !state.sidebarFold;
		},
		setPageHeight(state, val) {
			state.pageHeight = val;
		},
	},
};
=======
export default {
	state: {
		sidebarFold: false,
		pageHeight: 0,
	},
	getters: {
		sidebarFold: (state) => state.sidebarFold,
		pageHeight: (state) => state.pageHeight,
	},
	mutations: {
		toggleSideBar(state) {
			state.sidebarFold = !state.sidebarFold;
		},
		setPageHeight(state, val) {
			state.pageHeight = val;
		},
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
