import { combineReducers } from 'redux'
import jokesReducer from './jokes'
import countriesReducer from './countries'

const rootReducer = combineReducers({
    jokes : jokesReducer,
    countries: countriesReducer
});

export default rootReducer;