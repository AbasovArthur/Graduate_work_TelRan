import { loadProductByCategory } from "../store/redusers/productsByCategoriesRducer"

export const getProductsbyCategory = id => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadProductByCategory(json)))
    }
}
