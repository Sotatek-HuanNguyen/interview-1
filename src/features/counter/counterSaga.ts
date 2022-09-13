import { put, takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call } from 'redux-saga/effects';
import { fetchCountEffect } from './counterAPI';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  try {
    // yield call(fetchCountEffect, action.payload);
    // Dispatch action success]
    yield put(incrementSagaSuccess(action.payload));
  } catch (error) {
    console.log('error', error);
  }
}

export default function* counterSaga() {
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
