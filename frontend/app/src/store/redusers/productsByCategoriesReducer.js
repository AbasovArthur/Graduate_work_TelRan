const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY'
const SORT_PRODUCTS = '[BY_CATEGORY] SORT_PRODUCTS';
const FILTER_PRODUCTS = '[BY_CATEGORY] FILTER_PRODUCTS';
const GET_DISCOUNT_PRODUCTS = '[BY_CATEGORY] GET_DISCOUNT_PRODUCTS';


export const loadProductByCategoryAction = payload => ({ type: LOAD_PRODUCT_BY_CATEGORY, payload });
export const sortProdByCategorieAction = payload => ({ type: SORT_PRODUCTS, payload });
export const filterProdByCategorieAction = payload => ({ type: FILTER_PRODUCTS, payload });
export const getDiscountProdByCategorieAction = payload => ({ type: GET_DISCOUNT_PRODUCTS, payload });

export const productsByCategoriesReducer = (state = { data: [] }, action) => {

    if (action.type === LOAD_PRODUCT_BY_CATEGORY) {

        const { data, category } = action.payload;
        const data_show_product = data.map(el => ({ ...el, show_product: true }));
        return { ...state, category, data: data_show_product }

    } else if (action.type === SORT_PRODUCTS) {

        const sortedData = [...state.data]

        if (action.payload === 'title') {
            sortedData.sort((a, b) => a.title.localeCompare(b.title))

        } else if (action.payload === 'price_asc') {
            sortedData.sort((a, b) => a.price - b.price)


        } else if (action.payload === 'price_desk') {
            sortedData.sort((a, b) => b.price - a.price)

        } else if (action.payload === 'dafault') {
            sortedData.sort((a, b) => a.id - b.id)
        }
        return { ...state, data: sortedData }

    } else if (action.type === FILTER_PRODUCTS) {
        const { min_value, max_value } = action.payload;

        const filterData = [...state.data].map(el => {
            if (el.price >= min_value && el.price <= max_value) {
                el.show_product = true;
            } else {
                el.show_product = false;
            }
            return el
        });
        return { ...state, data: filterData }

    } else if (action.type === GET_DISCOUNT_PRODUCTS) {
        const discontData = action.payload

            ? [...state.data].map(el => {
                if (!el.discont_price) {
                    el.show_product = false
                }
                return el
            })
            : state.data.map(el => {
                el.show_product = true
                return el
            });

        return { ...state, data: discontData }
    } else {
        return state
    }
}

/*
.map(el => ({...el, show_product: true}));
*/

