import React from 'react'
import styled from "styled-components"
import { ProductConsumer } from "../Context/Context"
import { Link } from "react-router-dom";
export default function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value
        return (
          <ProductWrapper className="col-10 col-sm-8 col-md-6 col-lg-4 my-4 mx-auto">
            <div className="card">
              <img src={product.image} style={{ height: "320px" }} className="card-img-top p-3" alt={product.title} />
              <div className="btn-group mx-2 my-4">
                <Link className="btn  btn-outline-warning" to={`/products/${product.id}`} onClick={() => setSingleProduct(product.id)}>Inspect</Link>
                <button type="button" className="btn btn-outline-success" onClick={() => addToCart(product.id)}>Add To Cart</button>
              </div>
              <h1 className="text-capitalize title mx-2">{product.title}</h1>
              <p className="price mx-2 text-primary">${product.price}</p>
            </div>
          </ProductWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const ProductWrapper = styled.div`

.card {
  min-height: 540px;
}
.card:hover {
  box-shadow: 1px 1px 7px #dedede;
}
.title {
  font-size: 1.4rem;
  letter-spacing: 3px;
}
.price {
  font-size: 2rem;
  letter-spacing: 4px;
}
`