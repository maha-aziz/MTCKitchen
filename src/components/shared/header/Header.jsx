import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import shoppingCart from '../../assets/shopping-cart.png'
import mhkLogo from '../../assets/mhk.png'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <div>
      <section className="head">
        <nav className="container flexSB">
          <div className={click ? 'mobile-social' : 'social'} onClick={() => setClick(false)}>
            <i className="fab fa-regular fa-facebook-f icon"></i>
            <i className="fab fa-regular fa-twitter icon"></i>
            <i className="fab fa-regular fa-instagram icon"></i>
          </div>
          <Link to="/shop" className={click ? 'mobile-nav' : 'nav-items'} onClick={() => setClick(false)}>
            Shop
          </Link>
          <Link to="/planKitchen" className={click ? 'mobile-nav' : 'nav-items'} onClick={() => setClick(false)}>
            Plan My Kitchen
          </Link>
          <div className="logo">
            <img
              src={mhkLogo}
              alt="logo"
              className={click ? 'mobile-mhkLogo' : 'mhkLogo'}
              onClick={() => setClick(false)}
            />
          </div>
          <Link to="/aboutUs" className={click ? 'mobile-nav' : 'nav-items'} onClick={() => setClick(false)}>
            About Us
          </Link>
          <Link to="/gallery" className={click ? 'mobile-nav' : 'nav-items'} onClick={() => setClick(false)}>
            Gallery
          </Link>
          <button className={click ? 'mobile-order-btn' : 'order-btn'} onClick={() => setClick(false)}>
            <Link to="/myOrder">My Order</Link>
            <img src={shoppingCart} alt="shoppingCart" />
          </button>
        </nav>
        <button className="toggle" onClick={() => setClick(!click)}>
          {click ? <i className="fa fa-times" /> : <i className="fa fa-bars" />}
        </button>
      </section>
    </div>
  )
}

export default Header
