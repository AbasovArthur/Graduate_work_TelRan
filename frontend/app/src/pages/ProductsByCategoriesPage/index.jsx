import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsbyCategory } from '../../requests/products_req'
import ProductsContainer from '../../components/ProductsContainer'
import DiscFiltrSortForm from '../../components/FilterForms/DiscFiltrSortForm'

export default function ProductsByCategoriesPage() {

  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(() => dispatch(getProductsbyCategory(id)),[ id ])

  const { data, category } = useSelector(state => state.productsByCategory)

  return (
    <div>
      <DiscFiltrSortForm discount_show={true}/>
      <h1>{category && category.title }</h1>
      <ProductsContainer products={data} />
    </div>
  )
}


  //[ id ] это ID категории, полученное из useParams. Если пользователь перейдет на другую страницу категории (из /category/1 в /category/2), id изменится, и useEffect выполнится снова, чтобы загрузить новые продукты для этой категории.

  //(id) — это аргумент,в getProductsbyCategory. Эта функция выполняет HTTP-запрос к серверу для получения данных определенной категории. Указывает, какую категорию вы хотите получить, и id категории служит для этого "указателем"