import React from 'react'
import Hero from "../Components/Hero"
import Cart from "../Components/CartPage"
import CartBcg from "../images/storeBcg.jpeg"
export default function AboutPage() {
  return (
    <>
      <Hero title="cart" img={CartBcg} />
      <Cart />
    </>
  )
}