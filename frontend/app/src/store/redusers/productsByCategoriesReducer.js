const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY'

export const loadProductByCategory = payload => ({type: LOAD_PRODUCT_BY_CATEGORY, payload});

export const productsByCategoriesReducer = (state = {}, action) => {
    if (action.type === LOAD_PRODUCT_BY_CATEGORY) {
        const { data, category } = action.payload;
        
        // return {...state, category, data, show_product: true }

        const data_2 = data.map(el => ({...el, show_product: true}));
        return {...state, category, data: data_2 }
    } else {
        return state
    }
}

/*
.map(el => ({...el, show_product: true}));
*/