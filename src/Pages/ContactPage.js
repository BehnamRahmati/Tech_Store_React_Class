import React from 'react'
import Hero from "../Components/Hero"
import contactBcg from "../images/contactBcg.jpeg"
import Contact from "../Components/ContactPage/Contact"
export default function AboutPage() {
  return (
    <>
      <Hero title="contact us" img={contactBcg} />
      <Contact />
    </>
  )
}