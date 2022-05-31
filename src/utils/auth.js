<<<<<<< HEAD
import Cookies from 'js-cookie';
const TokenKey = 'saber-access-token';
const RefreshTokenKey = 'saber-refresh-token';
const tokenExpireKey = 'saber-token-expire';

export function getToken() {
	return Cookies.get(TokenKey);
}

export function setToken(token) {
	return Cookies.set(TokenKey, token);
}

export function getRefreshToken() {
	return Cookies.get(RefreshTokenKey);
}

export function setRefreshToken(token) {
	return Cookies.set(RefreshTokenKey, token);
}

export function setExpiresIn(token) {
	return Cookies.set(tokenExpireKey, token);
}

export function getTokenExpire() {
	return Cookies.get(tokenExpireKey);
}

export function removeToken() {
	return Cookies.remove(TokenKey);
}

export function removeRefreshToken() {
	return Cookies.remove(RefreshTokenKey);
}
=======
import Cookies from 'js-cookie';
const TokenKey = 'saber-access-token';
const RefreshTokenKey = 'saber-refresh-token';
const tokenExpireKey = 'saber-token-expire';

export function getToken() {
	return Cookies.get(TokenKey);
}

export function setToken(token) {
	return Cookies.set(TokenKey, token);
}

export function getRefreshToken() {
	return Cookies.get(RefreshTokenKey);
}

export function setRefreshToken(token) {
	return Cookies.set(RefreshTokenKey, token);
}

export function setExpiresIn(token) {
	return Cookies.set(tokenExpireKey, token);
}

export function getTokenExpire() {
	return Cookies.get(tokenExpireKey);
}

export function removeToken() {
	return Cookies.remove(TokenKey);
}

export function removeRefreshToken() {
	return Cookies.remove(RefreshTokenKey);
}
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9
