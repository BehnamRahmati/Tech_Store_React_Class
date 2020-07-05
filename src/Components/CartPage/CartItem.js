import React from 'react'
import { FaTrash, FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'
export default function CartItem({ increment, decrement, removeItem, cartItem }) {
  const { title, image, price, count, total, id } = cartItem
  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-10 col-lg-2 mx-auto text-center d-flex align-items-center justify-content-center mb-4">
          <img width="100" src={image} alt={title} className="img-thumbnail" />
        </div>
        <div className="col-10 col-lg-2 mx-auto text-center d-flex align-items-center justify-content-center mb-4">
          <span className="d-lg-none text-capitalize h4 m-0 mr-2">product : </span>
          <p className="h5 text-capitalize m-0"> {title}</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto text-center d-flex align-items-center justify-content-center mb-4">
          <span className="d-lg-none text-capitalize h4 m-0 mr-2">price : </span>
          <p className="h3 text-capitalize m-0"> $ {price}</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto text-center d-flex align-items-center justify-content-center mb-4">
          <FaChevronCircleDown className="text-primary h4" onClick={() => decrement(id)} />
          <p className="h3 text-capitalize m-0 mx-3">{count}</p>
          <FaChevronCircleUp className="text-primary h4" onClick={() => increment(id)} />
        </div>
        <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center">
          <FaTrash className="text-danger h4" onClick={() => removeItem(id)} />
        </div>
        <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center">
          <span className="d-lg-none text-capitalize h4 m-0 mr-2">total : </span>
          <p className=" h3 text-capitalize m-0">  $ {total}</p>
        </div>
      </div>
    </div>
  )
}
