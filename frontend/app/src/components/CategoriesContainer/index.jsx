//frontend\app\src\components\CategoriesContainer\index.jsx
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard';
import s from './style.module.css'

export default function CategoriesContainer({ h1, limit }) {

  // начальное значение колличества отобр карточек на главной
  const [visibleCategories, setVisibleCategories] = useState(limit); 
  useEffect(() => {
    const handle_resize = () => {
      if (window.innerWidth <= 480) {
        setVisibleCategories(1)
      } else if (window.innerWidth <= 768) {
        setVisibleCategories(2)
      } else if (window.innerWidth <= 1280) {
        setVisibleCategories(3)
      } else {
        setVisibleCategories(limit)
      }
    }

    handle_resize();
    window.addEventListener('resize', handle_resize);

    return () => {
      window.removeEventListener('resize', handle_resize);
    };
  }, []);

  const category_store = useSelector(state => state.categories)

  const show_category = limit ? category_store.slice(0, visibleCategories) : category_store


  return (
    <div className={s.container}>
      <h1>{h1}</h1>
      <div className={s.categories}>
        {/* {category_store.map(el => <CategoryCard className={s.item} key={el.id} {...el} />)} */}
        {show_category.map(el => <CategoryCard className={s.item} key={el.id} {...el} />)}
      </div>
    </div>
  )
}
