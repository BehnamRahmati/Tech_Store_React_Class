import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProductConsumer } from "../Context/Context"

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value
        return (
          <SideWrapper show={sidebarOpen}>
            <ul className="sidebar__links">
              {links.map(link => <li key={link.id}><Link to={link.path} className="sidebar__link" onClick={handleSidebar}>{link.text}</Link></li>)}
            </ul>
          </SideWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const responsiveNav = "max-width:1000px";
const SideWrapper = styled.nav`
  position:fixed;
  top:63px;
  right:0;
  height: calc(100vh - 63px);
  width:300px;
  background-color:#fff;
  box-shadow:inset -1px 0 5px #ccc;
  display:none;
  transition:all 0.4s linear ;
  transform:${props => props.show ? "translateX(0)" : "translateX(100%)"};
  @media (${responsiveNav}) {
    display: block;
    }
  .sidebar__links {
    display:flex;
    flex-direction:column;
    padding:1rem 0;

    li {
      width:100%;
    }

    .sidebar__link {
      display: block;
      padding:1rem ;
      text-align:right;
      color:#222;
      text-transform:capitalize;
      transition:all 0.4s linear ;
      -webkit-transition:all 0.4s linear ;
      -moz-transition:all 0.4s linear ;
      -ms-transition:all 0.4s linear ;
      -o-transition:all 0.4s linear ;
    }
    li:hover {
      background-color: rgba(200,200,250 , 0.3);
    }
    .sidebar__link:hover {
      color:dodgerblue;
      transform: translateX(-5%);
      -webkit-transform: translateX(-5%);
      -moz-transform: translateX(-5%);
      -ms-transform: translateX(-5%);
      -o-transform: translateX(-5%);
    }
  }
`