import React from 'react'
import './home.css'
import Button from '../shared/button/Button'
import Header from '../shared/header/Header'

const Home = () => {
  return (
    <div>
      <section className="home">
        <Header />
        <div className="container">
          <div className="row">
            <p className="home-text">Design And Order Your New Kitchen Online Today</p>
            <h3>Bespoke & made to measure handmade kitchen design</h3>
            <Button className="home-btn" title="Order Now" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
