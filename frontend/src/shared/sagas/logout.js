import { put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '@/shared/base';

export function* logout() {
  yield put({ type: actionTypes.CLEAR_USER_DATA });
}

function* saga() {
  yield takeLatest(actionTypes.LOGOUT, logout);
}

export default saga;
