import React from 'react'
import Product from "../Product"
import FilterdProduct from "./FilterProduct"
import Title from "../Title"
import { ProductConsumer } from "../../Context/Context"

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="py-5" >
            <Title center title="our products" />
            <FilterdProduct />
            <div className="row" style={{ maxWidth: "100vw" }}>
              <div className="col-10 mx-auto">
                <h6 className="text-title text-capitalize"> total product : {filteredProducts.length} </h6>
              </div>
            </div>
            <div className="container">
              <div className="row py-5">
                {filteredProducts.length === 0 ? <div className="col-10 mx-auto text-center"><h6 className="py-5 text-capitalize text-center" >cant find any product ...</h6></div> :
                  filteredProducts.map(product => {
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
