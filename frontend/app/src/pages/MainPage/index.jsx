//frontend\app\src\pages\MainPage\index.jsx
import React from 'react'
import MainBanner from '../../components/MainBanner'
import CategoriesContainer from '../../components/CategoriesContainer'
import MainForm from '../../components/MainForm'

export default function MainPage() {
  return (
    <div>
      <MainBanner />
      <CategoriesContainer h1={'Catalog'} limit={4}/>
      <MainForm />
    </div>
  )
}


