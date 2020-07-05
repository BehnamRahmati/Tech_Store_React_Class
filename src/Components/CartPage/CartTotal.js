import React from 'react'
import { ProductConsumer } from "../../Context/Context"
export default function CartTotal() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubtotal, cartTax, cartTotal } = value;
            return (
              <div className="text-center col-10 mx-auto">
                <button type="button" className="btn btn-outline-danger text-capitalize px-5 mb-4" onClick={clearCart}>clear cart</button>
                <div className="row">
                  <div className="col-md-3 text-center">
                    <h4 className="text-capitalize text-danger">subtotal : $ {cartSubtotal}</h4>
                  </div>
                  <div className="col-md-1 text-center">-</div>
                  <div className="col-md-3 text-center">
                    <h4 className="text-capitalize text-success">discount : $ {-1 * cartTax}</h4>

                  </div>
                  <div className="col-md-1 text-center">
                    =
                  </div>
                  <div className="col-md-4 text-center">
                    <h4 className="text-capitalize text">cart total : $ {cartTotal}</h4>

                  </div>
                </div>
              </div>
            )
          }

          }
        </ProductConsumer>
      </div>

    </div>
  )
}
