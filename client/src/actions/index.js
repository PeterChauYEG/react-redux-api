import * as types from './action-types';

// cars actions
export const addCar = (car) => {
  return {
    type: types.ADD_CAR,
    car,
  }
}

export const addCarRequest = (car) => {
  return {
    type: types.ADD_CAR_REQUEST,
    car,
  }
}

export const getCarsRequest = () => {
  return {
    type: types.GET_CARS_REQUEST,
  }
}

export const setCars = () => {
  return {
    type: types.SET_CARS,
  }
}