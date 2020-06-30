import React from 'react'
import styled from "styled-components"
import mainBcg from "../images/mainBcg.jpeg"


export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
width:100%;
max-width:100vw;
height:${props => props.max ? "calc(100vh - 62px)" : "80vh"};
background:linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.3)) ,url(${props => props.img})center/cover no-repeat;
display:flex;
align-items:center;
justify-content:center;

.banner {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.title {
  color:#fff;
  font-weight:400;
  font-size:4rem;
  text-transform:capitalize;
  text-shadow:4px 4px 2px rgba(0,0,0,0.3);
  letter-spacing:3px;
  text-align:center;
  padding:2rem 1rem;
}

`

Hero.defaultProps = {
  img: mainBcg
}