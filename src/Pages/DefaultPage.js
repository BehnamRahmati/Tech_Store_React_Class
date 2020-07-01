import React from 'react'
import Hero from "../Components/Hero"
import defaultBcg from "../images/defaultBcg.jpeg"
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="hero-capitalize">oops there's no such page!!!</h2>
        <Link className="mainLink" to="/" >Home</Link>
      </Hero>
    </>
  )
}