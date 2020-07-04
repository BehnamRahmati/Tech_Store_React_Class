import React from 'react'
import { Link } from "react-router-dom"
import Title from "../Components/Title"
import Hero from "../Components/Hero"
import singleProductBcg from "../images/singleProductBcg.jpeg"
import { ProductConsumer } from "../Context/Context"
export default function AboutPage() {
  return (
    <>
      <Hero title="Single product" img={singleProductBcg} />
      <ProductConsumer>
        {value => {
          const { addToCart, loading, singleProduct } = value;
          if (loading) {
            return (<h1>hello from loading</h1>)
          }
          const { company, description, id, price, image, title } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img src={`../${image}`} alt={title} className="img-fluid " />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <Title title={title} />
                    <h5 className="text-capitalize text-muted my-4">company : {company}</h5>
                    <h4 className="text-capitalize mb-4" style={{ color: "dodgerblue" }}>price : $ {price}</h4>
                    <h3 className="text-capitalize text-title mt-3">some info about product :</h3>
                    <p className="text-capitalize text-title mt-3">{description}</p>
                    <button type="button" className="mainLink  mt-2" onClick={() => addToCart(id)}>add to cart</button>
                    <Link to="/products" style={{ marginLeft: "1.5rem" }} className="mainLink mt-2">back to products</Link>
                  </div>
                </div>
              </div>
            </section>
          )
        }}
      </ProductConsumer>
    </>
  )
}