<<<<<<< HEAD
<template>
	<el-radio
		ref="radio"
		v-bind="$attrs"
		v-model="inputValue"
		:label="label"
		v-on="$listeners"
	>
		{{ text }}
	</el-radio>
</template>

<script>
import FormMixin from './mixin';

export default {
	mixins: [FormMixin],
	props: {
		label: String,
		text: String,
	},
};
=======
<template>
	<el-radio
		ref="radio"
		v-bind="$attrs"
		v-model="inputValue"
		:label="label"
		v-on="$listeners"
	>
		{{ text }}
	</el-radio>
</template>

<script>
import FormMixin from './mixin';

export default {
	mixins: [FormMixin],
	props: {
		label: String,
		text: String,
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
</script>