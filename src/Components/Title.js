import React from 'react'
import styled from "styled-components"
export default function Title({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title} </h2>
        <div className="title-underline"></div>
      </div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
text-align:${props => props.center ? "center" : "left"};
z-index: 0;
max-width: 100vw;
.text-title {
  text-transform:capitalize;
}
.title-underline {
  width: 7rem;
  height: 5px ;
  background-color: dodgerblue;
  border-radius: 20px;
  margin: ${props => props.center ? "0 auto" : " none"}
}

`