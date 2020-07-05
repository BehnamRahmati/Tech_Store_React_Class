import React from 'react'
import Title from "../Title";
import CartColumn from "./CartColumn"
import CartList from "./CartList"
import CartTotal from "./CartTotal"
export default function index() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center />
      </div>
      <CartColumn></CartColumn>
      <CartList></CartList>
      <CartTotal></CartTotal>
    </section>
  )
}
