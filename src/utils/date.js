<<<<<<< HEAD
import { format, parse } from 'fecha';

export function toDate(date) {
	return isDate(date) ? new Date(date) : null;
}

export function isDate(date) {
	if (date === null || date === undefined) return false;
	if (isNaN(new Date(date).getTime())) return false;
	if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
	return true;
}

export function isDateObject(val) {
	return val instanceof Date;
}

export function formatDate(date, fmt) {
	date = toDate(date);
	if (!date) return '';
	if (fmt) {
		fmt = fmt.replace('yyyy', 'YYYY');
	} else {
		fmt = 'YYYY-MM-dd';
	}
	return format(date, fmt);
}

export function parseDate(string, fmt) {
	if (fmt) {
		fmt = fmt.replace('yyyy', 'YYYY');
	} else {
		fmt = 'YYYY-MM-dd';
	}
	return parse(string, fmt);
}

/**
 * 获取某年的天数
 * @param {*} year
 * @returns
 */
export function getDayCountOfYear(year) {
	const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
	return isLeapYear ? 366 : 365;
}

/**
 * 获取某年某月的天数
 * @param {*} year
 * @param {*} month
 * @returns
 */
export function getDayCountOfMonth(year, month) {
	if (month === 3 || month === 5 || month === 8 || month === 10) {
		return 30;
	}

	if (month === 1) {
		if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
			return 29;
		} else {
			return 28;
		}
	}

	return 31;
}

export function modifyDate(date, y, m, d) {
	return new Date(
		y,
		m,
		d,
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
		date.getMilliseconds(),
	);
}

export function modifyTime(date, h, m, s) {
	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
		h,
		m,
		s,
		date.getMilliseconds(),
	);
}

export function clearTime(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * 获取过去日期，默认昨天
 * @param {*} date
 * @param {*} diff 1昨天，2前天，以此类推
 * @returns
 */
export function prevDate(date, diff = 1) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - diff);
}

/**
 * 获取未来日期，默认明天
 * @param {*} date
 * @param {*} diff 1明天，2后天，以此类推
 * @returns
 */
export function nextDate(date, diff = 1) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff);
}

/**
 * 改变日期的年份和月份
 * @param {*} date
 * @param {*} year
 * @param {*} month
 * @returns
 */
export function changeYearMonthAndClampDate(date, year, month) {
	// 如: (2010-1-31, 2010, 2) => 2010-2-28
	const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
	return modifyDate(date, year, month, monthDate);
}

/**
 * 获取上个月
 * @param {*} date
 * @returns
 */
export function prevMonth(date) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return month === 0
		? changeYearMonthAndClampDate(date, year - 1, 11)
		: changeYearMonthAndClampDate(date, year, month - 1);
}

/**
 * 获取下个月
 * @param {*} date
 * @returns
 */
export function nextMonth(date) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return month === 11
		? changeYearMonthAndClampDate(date, year + 1, 0)
		: changeYearMonthAndClampDate(date, year, month + 1);
}

/**
 * 获取往年日期，默认去年
 * @param {*} date
 * @param {*} diff 1去年，2前年 以此类推
 * @returns
 */
export function prevYear(date, diff = 1) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return changeYearMonthAndClampDate(date, year - diff, month);
}

/**
 * 获取未来年份的今天，默认明年
 * @param {*} date
 * @param {*} diff 1明年，2后年 以此类推
 * @returns
 */
export function nextYear(date, diff = 1) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return changeYearMonthAndClampDate(date, year + diff, month);
}

/**
 * 日期范围是否在同一个月份内
 * @param {*} start
 * @param {*} end
 * @returns
 */
export const rangeInOneMonth = function (start, end) {
	return (
		start.getMonth() === end.getMonth() &&
		start.getFullYear() === end.getFullYear()
	);
};
//天数加减
export const dateChange = function (num = 1, date = false) {
	if (!date) {
		date = new Date(); //没有传入值时,默认是当前日期
		date =
			date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	}
	date += ' 00:00:00'; //设置为当天凌晨12点
	date = Date.parse(new Date(date)) / 1000; //转换为时间戳
	date += 86400 * num; //修改后的时间戳
	var newDate = new Date(parseInt(date) * 1000); //转换为时间
	const month =
		newDate.getMonth() + 1 > 10
			? newDate.getMonth() + 1
			: '0' + (+newDate.getMonth() + 1);
	const day =
		newDate.getDate() > 10 ? newDate.getDate() : '0' + +newDate.getDate();
	return newDate.getFullYear() + '-' + month + '-' + day;
};
// 月份加减
export const monthChange = function (yearMonthDay, monthNum) {
	let arr = yearMonthDay.split('-'); //2020-08-19或2020-08
	let year = parseInt(arr[0]);
	let month = parseInt(arr[1]);
	let day = parseInt(arr[2]);
	month = month + monthNum;
	if (month > 12) {
		//月份加
		let yearNum = parseInt((month - 1) / 12);
		month = month % 12 == 0 ? 12 : month % 12;
		year += yearNum;
	} else if (month <= 0) {
		//月份减
		month = Math.abs(month);
		let yearNum = parseInt((month + 12) / 12);
		year -= yearNum;
	}
	month = month < 10 ? '0' + month : month;
	return year + '-' + month + '-' + day;
};
=======
import { format, parse } from 'fecha';

export function toDate(date) {
	return isDate(date) ? new Date(date) : null;
}

export function isDate(date) {
	if (date === null || date === undefined) return false;
	if (isNaN(new Date(date).getTime())) return false;
	if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
	return true;
}

export function isDateObject(val) {
	return val instanceof Date;
}

export function formatDate(date, fmt) {
	date = toDate(date);
	if (!date) return '';
	if (fmt) {
		fmt = fmt.replace('yyyy', 'YYYY');
	} else {
		fmt = 'YYYY-MM-dd';
	}
	return format(date, fmt);
}

export function parseDate(string, fmt) {
	if (fmt) {
		fmt = fmt.replace('yyyy', 'YYYY');
	} else {
		fmt = 'YYYY-MM-dd';
	}
	return parse(string, fmt);
}

/**
 * 获取某年的天数
 * @param {*} year
 * @returns
 */
export function getDayCountOfYear(year) {
	const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
	return isLeapYear ? 366 : 365;
}

/**
 * 获取某年某月的天数
 * @param {*} year
 * @param {*} month
 * @returns
 */
export function getDayCountOfMonth(year, month) {
	if (month === 3 || month === 5 || month === 8 || month === 10) {
		return 30;
	}

	if (month === 1) {
		if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
			return 29;
		} else {
			return 28;
		}
	}

	return 31;
}

export function modifyDate(date, y, m, d) {
	return new Date(
		y,
		m,
		d,
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
		date.getMilliseconds(),
	);
}

export function modifyTime(date, h, m, s) {
	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
		h,
		m,
		s,
		date.getMilliseconds(),
	);
}

export function clearTime(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * 获取过去日期，默认昨天
 * @param {*} date
 * @param {*} diff 1昨天，2前天，以此类推
 * @returns
 */
export function prevDate(date, diff = 1) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - diff);
}

/**
 * 获取未来日期，默认明天
 * @param {*} date
 * @param {*} diff 1明天，2后天，以此类推
 * @returns
 */
export function nextDate(date, diff = 1) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff);
}

/**
 * 改变日期的年份和月份
 * @param {*} date
 * @param {*} year
 * @param {*} month
 * @returns
 */
export function changeYearMonthAndClampDate(date, year, month) {
	// 如: (2010-1-31, 2010, 2) => 2010-2-28
	const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
	return modifyDate(date, year, month, monthDate);
}

/**
 * 获取上个月
 * @param {*} date
 * @returns
 */
export function prevMonth(date) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return month === 0
		? changeYearMonthAndClampDate(date, year - 1, 11)
		: changeYearMonthAndClampDate(date, year, month - 1);
}

/**
 * 获取下个月
 * @param {*} date
 * @returns
 */
export function nextMonth(date) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return month === 11
		? changeYearMonthAndClampDate(date, year + 1, 0)
		: changeYearMonthAndClampDate(date, year, month + 1);
}

/**
 * 获取往年日期，默认去年
 * @param {*} date
 * @param {*} diff 1去年，2前年 以此类推
 * @returns
 */
export function prevYear(date, diff = 1) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return changeYearMonthAndClampDate(date, year - diff, month);
}

/**
 * 获取未来年份的今天，默认明年
 * @param {*} date
 * @param {*} diff 1明年，2后年 以此类推
 * @returns
 */
export function nextYear(date, diff = 1) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return changeYearMonthAndClampDate(date, year + diff, month);
}

/**
 * 日期范围是否在同一个月份内
 * @param {*} start
 * @param {*} end
 * @returns
 */
export const rangeInOneMonth = function (start, end) {
	return (
		start.getMonth() === end.getMonth() &&
		start.getFullYear() === end.getFullYear()
	);
};
//天数加减
export const dateChange = function (num = 1, date = false) {
	if (!date) {
		date = new Date(); //没有传入值时,默认是当前日期
		date =
			date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	}
	date += ' 00:00:00'; //设置为当天凌晨12点
	date = Date.parse(new Date(date)) / 1000; //转换为时间戳
	date += 86400 * num; //修改后的时间戳
	var newDate = new Date(parseInt(date) * 1000); //转换为时间
	const month =
		newDate.getMonth() + 1 > 10
			? newDate.getMonth() + 1
			: '0' + (+newDate.getMonth() + 1);
	const day =
		newDate.getDate() > 10 ? newDate.getDate() : '0' + +newDate.getDate();
	return newDate.getFullYear() + '-' + month + '-' + day;
};
// 月份加减
export const monthChange = function (yearMonthDay, monthNum) {
	let arr = yearMonthDay.split('-'); //2020-08-19或2020-08
	let year = parseInt(arr[0]);
	let month = parseInt(arr[1]);
	let day = parseInt(arr[2]);
	month = month + monthNum;
	if (month > 12) {
		//月份加
		let yearNum = parseInt((month - 1) / 12);
		month = month % 12 == 0 ? 12 : month % 12;
		year += yearNum;
	} else if (month <= 0) {
		//月份减
		month = Math.abs(month);
		let yearNum = parseInt((month + 12) / 12);
		year -= yearNum;
	}
	month = month < 10 ? '0' + month : month;
	return year + '-' + month + '-' + day;
};
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
