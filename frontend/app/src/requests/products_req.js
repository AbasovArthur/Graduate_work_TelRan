import { loadProductByCategory } from "../store/redusers/productsByCategoriesReducer"

export const getProductsbyCategory = id => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
            .then(res => res.json())
            // .then(json => console.log(json.category));
            .then(json => dispatch(loadProductByCategory(json)))
    }
}
