import { put, takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call } from 'redux-saga/effects';

function* handleAddSaga(action: PayloadAction<number>) {
  try {
    // yield call(fetchCountEffect, action.payload);
    // Dispatch action success]

  } catch (error) {
    console.log('error', error);
  }
}

export default function* counterSaga() {
  // yield takeEvery(incrementSaga.toString(), handleAddSaga);
}
