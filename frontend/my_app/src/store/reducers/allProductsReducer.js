const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';


export const loadAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload });


export const allProductsReducer = (state = [], action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return action.payload.map(el => ({...el, show_product: true}))
    } else {
        return state
    }
}