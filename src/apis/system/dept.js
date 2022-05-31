<<<<<<< HEAD
import APIs from '..';
import request, { handle } from '@/utils/http';

export async function getDeptTree(tenantId) {
	const res = await request({
		url: APIs.dept.tree,
		method: 'get',
		params: {
			tenantId,
		},
	});
	return handle({
		...res,
	});
}
=======
import APIs from '..';
import request, { handle } from '@/utils/http';

export async function getDeptTree(tenantId) {
	const res = await request({
		url: APIs.dept.tree,
		method: 'get',
		params: {
			tenantId,
		},
	});
	return handle({
		...res,
	});
}
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
