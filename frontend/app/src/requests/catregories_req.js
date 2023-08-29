
export const getAllCategories = () => {
    fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => console.log(json));
}