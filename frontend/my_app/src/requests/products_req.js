import { loadAllProductsAction } from "../store/reducers/allProductsReducer";


export const getAllProducts = dispatch => {
    fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)));
}
