<<<<<<< HEAD
import { getAllTreeDict } from '@/apis/system/dict';
import { deepChangeKey } from '@/utils/util';

export default {
	state: {
		dictTree: [],
		dictMap: {},
	},
	getters: {
		getDictByCode: (state) => {
			return (code) => state.dictMap[code] || [];
		},
	},
	mutations: {
		setAllDicts(state, val) {
			let dictMap = {}; // 保存到Map对象
			val.forEach((item) => {
				dictMap[item.code] = deepChangeKey(item.children, {
					label: 'dictValue',
					value: 'dictKey',
				});
			});
			state.dictMap = dictMap;
			state.dictList = deepChangeKey(val, {
				label: 'dictValue',
				value: 'dictKey',
			});
		},
	},
	actions: {
		getTreeDict({ commit }) {
			return new Promise((resolve) => {
				getAllTreeDict().then((res) => {
					const data = res.data || [];
					commit('setAllDicts', data);
					resolve(data);
				});
			});
		},
	},
};
=======
import { getAllTreeDict } from '@/apis/system/dict';
import { deepChangeKey } from '@/utils/util';

export default {
	state: {
		dictTree: [],
		dictMap: {},
	},
	getters: {
		getDictByCode: (state) => {
			return (code) => state.dictMap[code] || [];
		},
	},
	mutations: {
		setAllDicts(state, val) {
			let dictMap = {}; // 保存到Map对象
			val.forEach((item) => {
				dictMap[item.code] = deepChangeKey(item.children, {
					label: 'dictValue',
					value: 'dictKey',
				});
			});
			state.dictMap = dictMap;
			state.dictList = deepChangeKey(val, {
				label: 'dictValue',
				value: 'dictKey',
			});
		},
	},
	actions: {
		getTreeDict({ commit }) {
			return new Promise((resolve) => {
				getAllTreeDict().then((res) => {
					const data = res.data || [];
					commit('setAllDicts', data);
					resolve(data);
				});
			});
		},
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
