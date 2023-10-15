import { loadAllProductsAction } from "../store/reducers/allProductsReducer";


export const getAllProducts = dispatch => {
    fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)));
}


export const salePhoneNum = (phone_num) => {
    fetch('http://localhost:3333/sale/send',{
      method:'POST',
      body:JSON.stringify(phone_num),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
  })
      .then(res => res.json())
      .then(json => console.log(json, '5 % on the first order'))
  }

  export const orderPhoneNum = (phone_num) => {
    fetch('http://localhost:3333/order/send ',{
      method:'POST',
      body:JSON.stringify(phone_num),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
  })
      .then(res => res.json())
      .then(json => console.log(json, 'order product'))
  }