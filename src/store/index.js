<<<<<<< HEAD
/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
	const value = modulesFiles(modulePath);
	modules[moduleName] = value.default;
	return modules;
}, {});

export default new Vuex.Store({
	modules,
	state: {},
	getters: {},
	mutations: {},
	actions: {},
});
=======
/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
	const value = modulesFiles(modulePath);
	modules[moduleName] = value.default;
	return modules;
}, {});

export default new Vuex.Store({
	modules,
	state: {},
	getters: {},
	mutations: {},
	actions: {},
});
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
