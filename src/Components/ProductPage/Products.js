import React from 'react'
import Product from "../Product"
import Title from "../Title"
import { ProductConsumer } from "../../Context/Context"

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <Title center title="our products" />
            <div className="container">
              <div className="row py-5">
                {filteredProducts.map(product => {
                  return (<Product key={product.id} product={product} />)
                })}
              </div>
            </div>
          </section>
        )
      }}
    </ProductConsumer>
  )
}
