import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './redusers/categoriesReducer';
import { productsByCategoriesReducer } from './redusers/productsByCategoriesReducer';
import { allProductsReduser } from './redusers/allProductsReduser';
import { singleProductReduser } from './redusers/singleProductReduser';
import { cartReducer } from './redusers/cartReducer';

const rootReduser = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoriesReducer,
    allProducts: allProductsReduser,
    singleProduct: singleProductReduser,
    cart: cartReducer,
})

export const store = createStore(rootReduser, applyMiddleware(thunk));