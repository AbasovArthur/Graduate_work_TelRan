import { json } from "react-router-dom"
import { loadProductByCategoryAction } from "../store/redusers/productsByCategoriesReducer"
import { loadAllProductsAction } from "../store/redusers/allProductsReduser"
import { loadSingleProductAction } from "../store/redusers/singleProductReduser"

export const getProductsbyCategory = id => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
            .then(res => res.json())
            // .then(json => console.log(json.category));
            .then(json => dispatch(loadProductByCategoryAction(json)))
    }
}

export const getAllProducts = dispatch => {
    fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)));
}

export const getSingleProduct = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)))
    }
}