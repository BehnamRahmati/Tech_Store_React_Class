import React from 'react'
import { ProductConsumer } from "../Context/Context"
import styled from "styled-components";
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(product => {
                return (
                  <li key={product.id} className="cart-item mb-3">
                    <img width="75" src={`../${product.image}`} alt={product.title} className="img-thumbnail" />
                    <div className="ml-3">
                      <h6 className="text-title text-capitalize">{product.title} </h6>
                      <h6 className="text-title text-capitalize">amount: {product.count} </h6>
                    </div>
                  </li>)
              })}
            </ul>
            <h4 className="text-capitalize text-center text-info">cart total: ${cartTotal}</h4>
            <div className="text-center my-4">
              <Link className="mainLink" to="/cart">cart page</Link>
            </div>
          </CartWrapper>
        )
      }}
    </ProductConsumer>
  )
}


const CartWrapper = styled.div`
  position:fixed;
  top:63px;
  left:0;
  height: calc(100vh - 63px);
  width:300px;
  z-index: 100;
  background-color:#fff;
  box-shadow:inset -1px 0 5px #ccc;
  transition:all 0.4s linear ;
  transform:${props => props.show ? "translateX(0)" : "translateX(-100%)"};
  padding:1rem 0.5rem;
  overflow-y:scroll;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    display:flex;
  }

`