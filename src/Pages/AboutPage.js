import React from 'react'
import Hero from "../Components/Hero"
import Info from "../Components/AboutPage/Info"
import AboutBcg from "../images/aboutBcg.jpeg"
export default function AboutPage() {
  return (
    <>
      <Hero title="about page" img={AboutBcg} max="true" />
      <Info />
    </>
  )
}
