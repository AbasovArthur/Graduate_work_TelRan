const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY'

export const loadProductByCategory = payload => ({type: LOAD_PRODUCT_BY_CATEGORY, payload});

export const productsByCategoriesRducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCT_BY_CATEGORY) {
        const { data, category } = action.payload;
        return {...state, category, data}
    } else {
        return state
    }
}

/*
// В редьюсере
if (action.type === LOAD_PRODUCT_BY_CATEGORY) {
    const { data, category } = action.payload;
    // Обработка данных
}

*/