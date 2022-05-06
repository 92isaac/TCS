import React, { useState } from 'react'
import '../navbarfiles/navbar.css'
import { Link } from 'react-router-dom'
import TcsLogo from "../../images/tcs_logo.png"
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false)
  return (
    <nav className="navbar-container">
        <Link to="/"><img src={TcsLogo} alt='tcslogo' className="logo" width={150} style={{"backgroundColor": "#fff"}} /></Link>
        <ul className={mobileView ? "nav-ul-mobile" : "nav-ul"} onClick={()=>setMobileView(false)}>
           <li className="nav-items"><Link to="/">Home</Link></li>
           <li className="nav-items"><Link to="/about">About</Link></li>
           <li className="nav-items"><Link to="/event">Event</Link></li>
           <li className="nav-items"><Link to="/team">Team</Link></li>
           <li className="nav-items"><Link to="/booking">Booking/Order</Link></li>
           <li className="nav_items_btn"><Link to="/signup">SignUp</Link></li>
        </ul>
        <button className="mobile-menu-icon" onClick={()=>setMobileView(!mobileView)}>
          {mobileView ?  <FaTimes/> : <FaBars /> }
        </button>
    </nav>
  )
}

export default Navbar