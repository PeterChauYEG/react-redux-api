// import redux-saga deps
import { takeEvery } from 'redux-saga'
import { call, put, } from 'redux-saga/effects'

// import api
import Client from '../Client'

// worker Saga: will be fired on ADD_CAR_REQUEST actions
function* addCar(action) {
  try {

    // make api call to create a new car
    const car = yield call(Client.addCar, action.car, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with newly added car
    yield put({ type: "ADD_CAR", car })

  } catch (e) {
    console.log(e)
  }
}

/*
  Starts getCars on each dispatched 'ADD_CAR_REQUEST' action.
  Allows concurrent adds of cars
*/
export function* addCarRequest() {
  yield takeEvery('ADD_CAR_REQUEST', addCar);
}

// worker Saga: will be fired on GET_CARS_REQUEST actions
function* getCars() {
  try {

    // make api call to get cars
    const cars = yield call(Client.getCars, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with cars
    yield put({ type: "SET_CARS", cars })

  } catch (e) {
    console.log(e)
  }
}

/*
  Starts addCar on each dispatched 'GET_CARS_REQUEST' action.
  Pulls cars from api and sets car.cars state
*/
export function* getCarsRequest() {
  yield takeEvery('GET_CARS_REQUEST', getCars);
}