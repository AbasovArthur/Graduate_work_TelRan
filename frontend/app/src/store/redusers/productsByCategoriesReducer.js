const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY'

export const loadProductByCategory = payload => ({type: LOAD_PRODUCT_BY_CATEGORY, payload});


const initialState = {
    data: [],
    category: null
};

export const productsByCategoriesReducer = (state = initialState, action) => {
    if (action.type === LOAD_PRODUCT_BY_CATEGORY) {
        const { data, category } = action.payload;
        return {...state, category, data }
    } else {
        return state
    }
}
