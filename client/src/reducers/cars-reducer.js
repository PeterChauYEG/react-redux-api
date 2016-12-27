import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_CAR:
      return [
        ...state,
        action.car,
      ]
    case types.SET_CARS:
      return action.cars
    default:
      return state;
  }
};