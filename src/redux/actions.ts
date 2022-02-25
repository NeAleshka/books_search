import {
	REQUEST_SEARCH,
	ADD_BOOKS,
	ADD_SEARCCONFIG,
	SEARCCONFIG_UPDATE,
	GET_FULLBOOK,
	WRITE_FULLBOOK,
} from './types';

export function requestSearch(searchConfig : any) {
	return {
		type: REQUEST_SEARCH,
		searchConfig,
	};
}

export function getFullBook(selfLink : any) {
	return {
		type: GET_FULLBOOK,
		selfLink,
	};
}

export function writeFullBook(book : any) {
	return {
		type: WRITE_FULLBOOK,
		book,
	};
}

export function addSearchConfig(searchConfig : any) {
	return {
		type: ADD_SEARCCONFIG,
		payload: searchConfig,
	};
}

export function updateSearchConfig(searchConfig : any) {
	return {
		type: SEARCCONFIG_UPDATE,
		payload: searchConfig,
	};
}

export function addMoreBooks(searchConfig : any) {
	return {
		type: ADD_BOOKS,
		searchConfig: searchConfig,
	};
}
