<<<<<<< HEAD
import { hasOwn } from './util';

export function isVNode(node) {
	return (
		node !== null &&
		typeof node === 'object' &&
		hasOwn(node, 'componentOptions')
	);
}
=======
import { hasOwn } from './util';

export function isVNode(node) {
	return (
		node !== null &&
		typeof node === 'object' &&
		hasOwn(node, 'componentOptions')
	);
}
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
