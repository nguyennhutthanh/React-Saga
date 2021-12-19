import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import { decrement, increment } from "./counterSlice";

export function* log(action: PayloadAction) {
  console.log("log ", action);
}

export default function* counterSaga() {
  console.log("counterSaga");

  yield takeEvery(increment().type, log);
  yield takeEvery(decrement().type, log);
}
