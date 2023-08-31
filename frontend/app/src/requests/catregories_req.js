import { loadAllCategoriesAction } from "../store/redusers/categoriesReduser";

export const getAllCategories = (dispatch) => {
    fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)));
}