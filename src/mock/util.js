<<<<<<< HEAD
import { formatQueryString } from '@/utils/util';

export function getUrlParams(url) {
	if (url.indexOf('?') >= 0) {
		return formatQueryString(url.split('?')[1]);
	}
	return {};
}

export function getUrlRegExp(url) {
	return RegExp(url + '.*');
}

export function getPageData(datas, current, size) {
	const start = (current - 1) * size;
	const end = start + size;
	return datas.slice(start, end);
}
=======
import { formatQueryString } from '@/utils/util';

export function getUrlParams(url) {
	if (url.indexOf('?') >= 0) {
		return formatQueryString(url.split('?')[1]);
	}
	return {};
}

export function getUrlRegExp(url) {
	return RegExp(url + '.*');
}

export function getPageData(datas, current, size) {
	const start = (current - 1) * size;
	const end = start + size;
	return datas.slice(start, end);
}
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
