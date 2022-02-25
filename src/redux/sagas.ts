import { call, put, takeEvery } from '@redux-saga/core/effects';
import * as Gapi from '../utils/Gapi';
import {
	REQUEST_SEARCH,
	FETCH_BOOKS,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_ERROR,
	ADD_BOOKS,
	ADD_MOREBOOKS,
	GET_FULLBOOK,
	WRITE_FULLBOOK,

} from './types';

export function* sagaWatcher() {

	yield takeEvery(REQUEST_SEARCH, sagaWorkerGetBooks);
	yield takeEvery(ADD_BOOKS, sagaWorkerMoreBooks);
	yield takeEvery(GET_FULLBOOK, sagaWorkerFullBook);
}

function* sagaWorkerGetBooks(searchConfig: any): any {

	yield put({ type: FETCH_BOOKS });
	const payload = yield call(Gapi.fetchBooks, searchConfig)
	if (!payload.error) {
		yield put({ type: FETCH_BOOKS_SUCCESS, payload })
	} else { yield put({ type: FETCH_BOOKS_ERROR, payload }) }

}

function* sagaWorkerMoreBooks(searchConfig: any): any {
	try {

		const payload = yield call(Gapi.fetchBooks, searchConfig);
		yield put({ type: ADD_MOREBOOKS, payload });

	} catch (err: any) {
		console.log({ message: err.message });
	}
}

function* sagaWorkerFullBook(selfLink: any): any {
	try {
		const payload = yield call(Gapi.getFullBook, selfLink);
		yield put({ type: WRITE_FULLBOOK, payload });
	} catch (err: any) {
		console.log({ message: err.message });
	}
}



