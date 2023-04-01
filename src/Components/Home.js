import React from 'react'
import { Details } from './Details'
import { Footer } from './Footer'
import { Product } from './Product'
import { Slider } from './Slider'

export const Home = () => {
  return (
    <div>
      <Slider/>
      <Details/>
      <Product/>
      <Footer/>
    </div>
  )
}
