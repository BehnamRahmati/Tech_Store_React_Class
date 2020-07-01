import React from 'react'
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5 mw-100">
      <div className="row mw-100">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" center />
          <form className="mt-5">
            <div className="form-group">
              <input type="text" name="firstName" className="form-control" placeholder="Behnam Rahmati" />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Behnam.main@gmail.com" />
            </div>
            <div className="form-group">
              <input type="text" name="subject" className="form-control" placeholder="Important !" />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-control" rows="10" placeholder=" Your Message !"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" className="form-control bg-primary text-white" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
