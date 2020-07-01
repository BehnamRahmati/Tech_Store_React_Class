import React from 'react'
import { ProductConsumer } from "../Context/Context"
import styled from "styled-components"
export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { social } = value;
        return (
          <FooterWrapper>
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <p className="footer__capitalize m-0">copyright &copy; tech store {new Date().getFullYear()} all rights reserved for behnam rahmati  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                  {social.map(link => <a key={link.id} href={link.url} >{link.icon}</a>)}
                </div>
              </div>
            </div>
          </FooterWrapper>
        )
      }}
    </ProductConsumer>
  )
}


const FooterWrapper = styled.footer`
background-color: #333;
padding: 1rem;
 .icon {
   font-size:1.5rem;
   margin:0.5rem;
   color:#eee;
 }
 .icon:hover {
   color:#ccc;
 }
 .footer__capitalize {
   font-size:0.9rem;
   text-transform: capitalize;
   color:#ccc;
 }
`