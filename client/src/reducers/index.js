// import redux deps
import { combineReducers } from 'redux'

// import reducers
import cars from './cars-reducer'

const rootReducer = combineReducers({
  cars,
})

export default rootReducer