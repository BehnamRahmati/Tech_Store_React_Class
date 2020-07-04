import React from 'react'
import Title from "../Title"
import Product from "../Product"
import { ProductConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";
// import { items } from '../../Context/productData';
export default function Featured() {
  return (
    <section className='py-5'>
      <Title title="featured products" center />
      <div className="container">
        <div className="row">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return (featuredProducts.map(featuredProduct => {
                return (<Product key={featuredProduct.id} product={featuredProduct} />)
              }))
            }}
          </ProductConsumer>
        </div>
      </div>
      <div className="text-center py-3">
        <Link className="mainLink" to="/products">all products</Link>
      </div>
    </section>
  )
}
