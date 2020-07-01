import React from 'react'
import Title from "../Title"
import aboutBcg from "../../images/aboutBcg.jpeg"


export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-3 col-md-6">
            <img className="img-fluid img-thumbnail" src={aboutBcg} alt="about page" />
          </div>
          <div className="col-10 mx-auto my-3 col-md-6">
            <Title title="about us" />
            <p className="text-lead text-muted py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio porro doloremque tempore quis dolores modi iure eius numquam consequuntur.
            </p>
            <p className="text-lead text-muted py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio porro doloremque tempore quis dolores modi iure eius numquam consequuntur.
            </p>
            <button type="button" className="mainLink"> more info</button>
          </div>
        </div>
      </div>
    </section>
  )
}
