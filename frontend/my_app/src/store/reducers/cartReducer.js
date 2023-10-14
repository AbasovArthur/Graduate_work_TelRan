const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CARD = 'DELETE_FROM_CARD'
const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';
const CLEAR_CARD = 'CLEAR_CARD';


export const addToCartAction = payload => ({ type: ADD_TO_CART, payload })
export const deleteFromCardAction = payload => ({ type: DELETE_FROM_CARD, payload })
export const incremProdAction = payload => ({ type: INCREMENT_PRODUCT, payload });
export const decremProdAction = payload => ({ type: DECREMENT_PRODUCT, payload });
export const clearCartAction = () => ({ type: CLEAR_CARD });

const checkProduct = (state, payload) => {
    const productInCart = state.find(el => el.id === +payload.id);
    if (!productInCart) {
        return [...state, { ...payload, count: 1 }]
    } else {
        productInCart.count++
        return [...state]
    }
}

const initialState = JSON.parse(localStorage.getItem('shopping_cart')) || [];

export const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)

    } else if (action.type === DELETE_FROM_CARD) {
        return state.filter(el => el.id !== action.payload)

    } else if (action.type === INCREMENT_PRODUCT) {
        state.find(el => el.id === action.payload).count++
        return [...state]

    } else if (action.type === DECREMENT_PRODUCT) {
        const product = state.find(el => el.id === action.payload)
        if (product.count === 1) {
            return state.filter(el => el.id !== product.id)
        } else {
            product.count--
            return [...state]
        }

    } else if (action.type === CLEAR_CARD){
        return []
    
    } else {
        return state
    }
}