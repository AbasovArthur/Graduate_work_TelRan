import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { categoriesReducer } from "./reducers/categoriesReducer";
import { allProductsReducer } from "./reducers/allProductsReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    allProducts: allProductsReducer,
    cart: cartReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk));