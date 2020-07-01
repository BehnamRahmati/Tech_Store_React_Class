import React from 'react'
import Hero from "../Components/Hero"
import { Link } from "react-router-dom"
import Servises from "../Components/HomePage/Services"
import Featured from "../Components/HomePage/Featured"




export default function AboutPage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link className="mainLink" to="/products">products</Link>
      </Hero>
      <Servises />
      <Featured />
    </>
  )
}