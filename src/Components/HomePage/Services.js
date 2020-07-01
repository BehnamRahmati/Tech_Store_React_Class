import React, { Component } from 'react'
import Title from "../Title"
import styled from "styled-components"
import { FaDolly, FaDollarSign, FaRedo } from "react-icons/fa"
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        title: "free shipping",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit iure deleniti itaque, exercitationem placeat!",
        icon: <FaDolly className="services__icon" />,
      },
      {
        id: 2,
        title: "secured payment",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit iure deleniti itaque, exercitationem placeat!",
        icon: <FaDollarSign className="services__icon" />,
      },
      {
        id: 3,
        title: "30 days return policy",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit iure deleniti itaque, exercitationem placeat!",
        icon: <FaRedo className="services__icon" />,
      },
    ]
  }
  render() {
    return (
      <ServicesWrapper>
        <div className="container">
          <Title title="our services" center />
          <div className="row my-5">
            {this.state.services.map(service => {
              return (
                <div key={service.id} className="col-10 col-sm-6 mx-auto col-md-4 text-center my-3">
                  <div className="service__icon">{service.icon}</div>
                  <h1 className="service__title my-3">{service.title}</h1>
                  <p className="service__info">{service.text} </p>
                </div>
              )
            })
            }
          </div>
        </div>
      </ServicesWrapper>
    )
  }
}


const ServicesWrapper = styled.section`
padding: 2rem 0;
background-color:#eee;
max-width: 100vw;
.service__icon {
font-size : 4rem;
}
.service__title {
font-size : 1.3rem;
font-weight: 700;
text-transform:capitalize;
}
.service__text {
  width:65%;
}
`