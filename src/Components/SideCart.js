import React from 'react'
import { ProductConsumer } from "../Context/Context"
import styled from "styled-components";

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart } = value
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>cart item</p>
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
  background-color:#fff;
  box-shadow:inset -1px 0 5px #ccc;
  transition:all 0.4s linear ;
  transform:${props => props.show ? "translateX(0)" : "translateX(-100%)"};
  padding:2rem;

`