import React from 'react'
import { ProductConsumer } from "../Context/Context"
export default function AboutPage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          return (<h1>from home</h1>)
        }}
      </ProductConsumer>
    </>
  )
}