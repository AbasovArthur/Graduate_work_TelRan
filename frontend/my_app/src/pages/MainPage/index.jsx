import React from 'react'
import MainForm from '../../components/MainForm'
import MainBanner from '../../components/MainBanner'
import MainSliseContainer from '../../components/UI/MainSliseContainer'

export default function MainPage() {
  return (
    <div>
      <MainBanner />
      <MainSliseContainer show_slise_category/>
      <MainForm />
      <MainSliseContainer show_slise_sales/>
    </div>
  )
}
