import React from 'react'
import CartItem from "./CartItem"
import { ProductConsumer } from "../../Context/Context"

export default function CartList() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ProductConsumer>
              {value => {
                const { cart, increment, decrement, removeItem } = value;
                if (cart.length === 0) return (<h1 className="text-title text-center text-capitalize my-5">your cart is currently empty</h1>)
                return (
                  <>
                    {cart.map(item => {
                      return (
                        <CartItem key={item.id} increment={increment} decrement={decrement} removeItem={removeItem} cartItem={item} />
                      )
                    })}
                  </>

                )
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </div>
  )
}
