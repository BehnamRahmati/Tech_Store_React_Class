import React from 'react'
import { ProductConsumer } from "../Context/Context"
import styled from "styled-components"
import { FcMenu, FcPackage } from "react-icons/fc"
import logo from "../logo.svg"
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleCart, handleSidebar } = value
        return (
          <NavWrapper>
            <div className="navbar__cartIcon">
              <FcPackage className="cart-toggler" onClick={handleCart} />
              <div className="navbar__cartItems">{cartItems}</div>
            </div>
            <div className="navbar__wrapper">
              <ul className="navbar__links">
                <li><Link className="navbar__link" to="/">home</Link></li>
                <li><Link className="navbar__link" to="/about">about</Link></li>
                <li><Link className="navbar__link" to="/products">products</Link></li>
                <li><Link className="navbar__link" to="/contact">contact</Link></li>
                <li><Link className="navbar__link" to="/cart">cart</Link></li>
              </ul>
              <Link to="/"><img src={logo} alt="logo" /></Link>
              <FcMenu className="navbar-toggler" onClick={handleSidebar} />
            </div>
          </NavWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const responsiveNav = "max-width:1000px";
const NavWrapper = styled.nav`
width: 100%;
max-width: 100vw;
position:sticky;
height: 62px;
box-shadow: 1px 0px 6px #ccc;
display: flex;
align-items: center;
justify-content:space-between;
padding:0.5rem 2rem;

.navbar__wrapper {
  height:100%;
  display:flex;
  align-items: center;
  .navbar__links {
    display:flex;
    align-items:center;
    height:100%;
    flex-direction:row-reverse;
     @media (${responsiveNav}) {
    display: none;
    }

    .navbar__link {
      padding:1.2rem;
      text-transform:capitalize;
      color:#222;
    }

    .navbar__link:hover {
      color:dodgerblue;
      background-color: rgba(200,200,250 , 0.3);
      border-bottom:2px solid dodgerblue;
    }
  }
  .navbar-toggler {
    display: none;
    font-size:2rem;
    margin:0 1rem;
    @media (${responsiveNav}) {
    display: block;
    }
  }
  a {
    height:100%
  }
  img {
    height:100%;
  }
}
.navbar__cartIcon{
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;

  .cart-toggler {
    font-size:2.5rem;
  }

  .navbar__cartItems {
    position:absolute;
    top:0;
    left:50%;
    background-color:dodgerblue;
    color:#fff;
    width:1.5rem;
    height:1.5rem;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:0.8rem;
  }
}



}
`