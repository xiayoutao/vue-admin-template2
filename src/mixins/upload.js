<<<<<<< HEAD
import { Base64 } from 'js-base64';
import { getToken } from '@/utils/auth';

export default {
	data() {
		return {
			uploadApi: '/api/running-resource/oss/endpoint/put-file',
			uploadParams: {
				systemType: 'cvas',
				bizType: 'default',
			},
		};
	},
	methods: {
		// 设置上传文件请求头
		setUploadToken() {
			return {
				Authorization: `Basic ${Base64.encode(
					`${process.env.VUE_APP_clientId}:${process.env.VUE_APP_clientSecret}`,
				)}`,
				[process.env.VUE_APP_tokenHeader]: 'bearer ' + getToken(),
			};
		},
		onExceed() {
			this.$message.warning('文件超出个数限制');
		},
	},
};
=======
import { Base64 } from 'js-base64';
import { getToken } from '@/utils/auth';

export default {
	data() {
		return {
			uploadApi: '/api/running-resource/oss/endpoint/put-file',
			uploadParams: {
				systemType: 'cvas',
				bizType: 'default',
			},
		};
	},
	methods: {
		// 设置上传文件请求头
		setUploadToken() {
			return {
				Authorization: `Basic ${Base64.encode(
					`${process.env.VUE_APP_clientId}:${process.env.VUE_APP_clientSecret}`,
				)}`,
				[process.env.VUE_APP_tokenHeader]: 'bearer ' + getToken(),
			};
		},
		onExceed() {
			this.$message.warning('文件超出个数限制');
		},
	},
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
