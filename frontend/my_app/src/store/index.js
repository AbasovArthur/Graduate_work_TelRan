import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { categoriesReducer } from "./reducers/categoriesReduser";
import { allProductsReduser } from "./reducers/allProductsReduser";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    allProducts: allProductsReduser,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));