<<<<<<< HEAD
import Mock from 'mockjs';
import APIs from '@/apis';
import { getUrlRegExp, getUrlParams, getPageData } from '../util';
import { topMenuList } from '../data/menu';

export default ({ mock }) => {
	if (!mock) return;

	// 分页查询
	Mock.mock(getUrlRegExp(APIs.topmenu.list), 'get', (options) => {
		const params = getUrlParams(options.url);
		let { current, size } = params;
		current = current - 0;
		size = size - 0;
		const list = getPageData(topMenuList, current, size);

		return {
			code: 200,
			data: {
				current,
				size,
				total: topMenuList.length,
				records: list,
			},
		};
	});

	Mock.mock(getUrlRegExp(APIs.topmenu.detail), 'get', (options) => {
		const params = getUrlParams(options.url);
		const { id } = params;
		return {
			code: 200,
			data: topMenuList.find((item) => item.id == id),
		};
	});
};
=======
import Mock from 'mockjs';
import APIs from '@/apis';
import { getUrlRegExp, getUrlParams, getPageData } from '../util';
import { topMenuList } from '../data/menu';

export default ({ mock }) => {
	if (!mock) return;

	// 分页查询
	Mock.mock(getUrlRegExp(APIs.topmenu.list), 'get', (options) => {
		const params = getUrlParams(options.url);
		let { current, size } = params;
		current = current - 0;
		size = size - 0;
		const list = getPageData(topMenuList, current, size);

		return {
			code: 200,
			data: {
				current,
				size,
				total: topMenuList.length,
				records: list,
			},
		};
	});

	Mock.mock(getUrlRegExp(APIs.topmenu.detail), 'get', (options) => {
		const params = getUrlParams(options.url);
		const { id } = params;
		return {
			code: 200,
			data: topMenuList.find((item) => item.id == id),
		};
	});
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
