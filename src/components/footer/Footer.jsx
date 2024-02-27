import React from 'react'
import './footer.css'
import mhkLogo from '../assets/mhk.png'
import { footerAbout } from './footerData'
import facebook from '../assets/social/facebook.png'
import twitter from '../assets/social/twitter.png'
import instagram from '../assets/social/instagram.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={mhkLogo} alt="logo" />
      </div>
      <div className="footer-items">
        <div className="items">
          {footerAbout.map((val) => (
            <div className="list">
              <p className="footer-title">{val.title}</p>
              <div className="options">
                <div className="options-list">
                  {val.options.map((option) => (
                    <li className="options-item">{option}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="social-footer">
            <p className="footer-title">Follow</p>
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
        </div>
      </div>
      <div className="copyright-div">
        <p className="copyright-text">
          Copyright Online MTC Home Kitchens {new Date().getFullYear()} - All rights reserved. <br></br> Responsive
          website design, Development & Hosting by mtc.
        </p>
      </div>
    </div>
  )
}

export default Footer
