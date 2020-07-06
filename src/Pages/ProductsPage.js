import React from 'react'
import Products from "../Components/ProductPage/Products"
import Hero from "../Components/Hero"
import ProductsBcg from "../images/productsBcg.jpeg"
import { Link } from "react-router-dom"
export default function AboutPage() {
  return (
    <React.Fragment>
      <Hero title="products" img={ProductsBcg}>
        <Link to="/" className="mainLink">home</Link>
      </Hero>
      <Products />
    </React.Fragment>
  )
}