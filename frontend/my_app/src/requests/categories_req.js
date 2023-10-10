import { json } from "react-router-dom"
import { loadAllCategoriesAction } from "../store/reducers/categoriesReduser"

export const getAllCategories = dispatch => {
    fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
}