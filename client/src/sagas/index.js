// import redux-saga deps
import { fork } from 'redux-saga/effects'

// import sagas
import {
  addCarRequest,
  getCarsRequest,
} from './cars-sagas'

export default function* rootSaga() {
  yield [
    fork(addCarRequest),
    fork(getCarsRequest),
  ]
}