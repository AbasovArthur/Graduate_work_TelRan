import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './redusers/categoriesReducer';
import { productsByCategoriesReducer } from './redusers/productsByCategoriesReducer';

const rootReduser = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoriesReducer,
})

export const store = createStore(rootReduser, applyMiddleware(thunk));