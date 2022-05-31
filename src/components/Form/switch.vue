<<<<<<< HEAD
<template>
	<el-switch
		ref="switch"
		v-bind="$attrs"
		v-model="inputValue"
		:active-value="activeValue"
		:active-text="activeText"
		:inactive-value="inactiveValue"
		:inactive-text="inactiveText"
	></el-switch>
</template>

<script>
import FormMixin from './mixin';

export default {
	mixins: [FormMixin],
	props: {
		value: {
			type: [String, Number, Boolean],
			default: false,
		},
		activeValue: {
			type: [String, Number, Boolean],
			default: true,
		},
		inactiveValue: {
			type: [String, Number, Boolean],
			default: false,
		},
		activeText: String,
		inactiveText: String,
	},
};
=======
<template>
	<el-switch
		ref="switch"
		v-bind="$attrs"
		v-model="inputValue"
		:active-value="activeValue"
		:active-text="activeText"
		:inactive-value="inactiveValue"
		:inactive-text="inactiveText"
	></el-switch>
</template>

<script>
import FormMixin from './mixin';

export default {
	mixins: [FormMixin],
	props: {
		value: {
			type: [String, Number, Boolean],
			default: false,
		},
		activeValue: {
			type: [String, Number, Boolean],
			default: true,
		},
		inactiveValue: {
			type: [String, Number, Boolean],
			default: false,
		},
		activeText: String,
		inactiveText: String,
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
</script>