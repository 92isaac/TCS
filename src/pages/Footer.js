import React from 'react'
import { Link } from "react-router-dom"
import "../components/footerfiles/footer.css"

const Footer = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className='row'>
        <div className='col text-center footer'>
          <h4>Corporate Address</h4>
          <h5>11 Olufunmilola  Okikiolu Street,Off  Toyin Street, Ikeja,Lagos  State</h5>
          <h4>Contact</h4>
          <div className="d">
            <Link to="tell:07068828711">07068828711</Link>
            <Link to="tell:09010095507">09010095507</Link>
          </div>
          <div className="row">
          Social Media Links(Facebook, Instagram, Twitter, LinkedIn)
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer