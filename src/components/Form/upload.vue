<<<<<<< HEAD
<template>
	<el-upload
		ref="upload"
		class="custom-upload"
		v-bind="$attrs"
		:action="uploadApi"
		:headers="setUploadToken()"
		:data="uploadParams"
		:list-type="listType"
		:with-credentials="true"
		:file-list="fileList"
		:on-success="onSuccess"
		:on-remove="onRemove"
		:on-exceed="onExceed"
		v-on="$listeners"
	>
		<i class="el-icon-plus" v-if="listType === 'picture-card'"></i>
		<el-button type="warning" style="height: 28px" icon="el-icon-folder" v-else>
			点击上传
		</el-button>
	</el-upload>
</template>

<script>
import UploadMixin from '@/mixins/upload';

export default {
	mixins: [UploadMixin],
	props: {
		value: [String, Number, Array],
		listType: String,
		systemType: {
			type: String,
			default: 'cvas',
		},
		bizType: {
			type: String,
			default: 'default',
		},
	},
	data() {
		return {
			fileList: [],
		};
	},
	watch: {
		value: {
			handler(val) {
				this.fileList = val || [];
			},
			immediate: true,
			deep: true,
		},
		systemType: {
			handler(val) {
				this.uploadParams.systemType = val;
			},
			immediate: true,
		},
		bizType: {
			handler(val) {
				this.uploadParams.bizType = val;
			},
			immediate: true,
		},
		fileList(val) {
			this.$emit('input', val);
		},
	},
	methods: {
		onSuccess(response, file, fileList) {
			if (response.code === 200) {
				this.fileList.push({
					name: response.data.originalName,
					url: response.data.link,
					uid: file.uid,
					status: 'success',
				});
			}
			if (this.isFunction(this.$attrs.onSuccess)) {
				this.$attrs.onSuccess(response, file, fileList);
			}
		},
		onRemove(file, fileList) {
			this.fileList = fileList;
			if (this.isFunction(this.$attrs.onRemove)) {
				this.$attrs.onRemove(file, fileList);
			}
		},
		onExceed(files, fileList) {
			this.$message.warning(`当前限制选择 ${this.$refs.upload.limit} 个文件`);
			if (this.isFunction(this.$attrs.onExceed)) {
				this.$attrs.onSuccess(files, fileList);
			}
		},
	},
};
=======
<template>
	<el-upload
		ref="upload"
		class="custom-upload"
		v-bind="$attrs"
		:action="uploadApi"
		:headers="setUploadToken()"
		:data="uploadParams"
		:list-type="listType"
		:with-credentials="true"
		:file-list="fileList"
		:on-success="onSuccess"
		:on-remove="onRemove"
		:on-exceed="onExceed"
		v-on="$listeners"
	>
		<i class="el-icon-plus" v-if="listType === 'picture-card'"></i>
		<el-button type="warning" style="height: 28px" icon="el-icon-folder" v-else>
			点击上传
		</el-button>
	</el-upload>
</template>

<script>
import UploadMixin from '@/mixins/upload';

export default {
	mixins: [UploadMixin],
	props: {
		value: [String, Number, Array],
		listType: String,
		systemType: {
			type: String,
			default: 'cvas',
		},
		bizType: {
			type: String,
			default: 'default',
		},
	},
	data() {
		return {
			fileList: [],
		};
	},
	watch: {
		value: {
			handler(val) {
				this.fileList = val || [];
			},
			immediate: true,
			deep: true,
		},
		systemType: {
			handler(val) {
				this.uploadParams.systemType = val;
			},
			immediate: true,
		},
		bizType: {
			handler(val) {
				this.uploadParams.bizType = val;
			},
			immediate: true,
		},
		fileList(val) {
			this.$emit('input', val);
		},
	},
	methods: {
		onSuccess(response, file, fileList) {
			if (response.code === 200) {
				this.fileList.push({
					name: response.data.originalName,
					url: response.data.link,
					uid: file.uid,
					status: 'success',
				});
			}
			if (this.isFunction(this.$attrs.onSuccess)) {
				this.$attrs.onSuccess(response, file, fileList);
			}
		},
		onRemove(file, fileList) {
			this.fileList = fileList;
			if (this.isFunction(this.$attrs.onRemove)) {
				this.$attrs.onRemove(file, fileList);
			}
		},
		onExceed(files, fileList) {
			this.$message.warning(`当前限制选择 ${this.$refs.upload.limit} 个文件`);
			if (this.isFunction(this.$attrs.onExceed)) {
				this.$attrs.onSuccess(files, fileList);
			}
		},
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
</script>