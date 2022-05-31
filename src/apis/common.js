<<<<<<< HEAD
import APIs from '.';
import request, { handle } from '@/utils/http';

export async function car_info(params) {
	const res = await request({
		url: APIs.common.car_info,
		method: 'get',
		params,
	});
	return handle({
		...res,
	});
}
=======
import APIs from '.';
import request, { handle } from '@/utils/http';

export async function car_info(params) {
	const res = await request({
		url: APIs.common.car_info,
		method: 'get',
		params,
	});
	return handle({
		...res,
	});
}
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
