import { createStore, combineReducers, applyMiddleware } from 'redux'
import think from 'redux-thunk'
import { categoriesReduser } from './redusers/categoriesReduser';

const rootReduser = combineReducers({
    categories: categoriesReduser,

})

export const store = createStore(rootReduser, applyMiddleware(think));