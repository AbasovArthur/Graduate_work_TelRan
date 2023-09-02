import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './redusers/categoriesReducer';
import { productsByCategoriesRducer } from './redusers/productsByCategoriesRducer';

const rootReduser = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoriesRducer,
})

export const store = createStore(rootReduser, applyMiddleware(thunk));