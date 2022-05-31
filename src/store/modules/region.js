<<<<<<< HEAD
import { getTree } from '@/apis/system/region';
import { cloneDeep } from 'lodash';

export default {
	state: {
		treeRegion: [],
	},
	getters: {
		treeRegion: (state) => state.treeRegion || [],
	},
	mutations: {
		setTreeRegion(state, val) {
			state.treeRegion = val || [];
		},
	},
	actions: {
		getTreeRegion({ commit }) {
			return new Promise((resolve) => {
				getTree().then((res) => {
					const data = res.data || [];
					commit('setTreeRegion', cloneDeep(data));
					resolve(data);
				});
			});
		},
	},
};
=======
import { getTree } from '@/apis/system/region';
import { cloneDeep } from 'lodash';

export default {
	state: {
		treeRegion: [],
	},
	getters: {
		treeRegion: (state) => state.treeRegion || [],
	},
	mutations: {
		setTreeRegion(state, val) {
			state.treeRegion = val || [];
		},
	},
	actions: {
		getTreeRegion({ commit }) {
			return new Promise((resolve) => {
				getTree().then((res) => {
					const data = res.data || [];
					commit('setTreeRegion', cloneDeep(data));
					resolve(data);
				});
			});
		},
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
