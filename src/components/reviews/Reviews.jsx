import React from 'react'
import './reviews.css'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import Button from '../shared/button/Button'

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="carousel slide" data-ride="carousel">
        <div className="review-body carousel-inner">
          <div className="carousel-item active">
            <p className="small-text">What our Customers Say</p>
            <p className="customer-heading">Over 35 years experience designing handmade kitchens</p>
            <p className="review-text">
              Since my first contact I have received a very high level of customer service and advice with my kitchen
              plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.
            </p>
            <Button title="Frequently Asked Questions" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselLeftControl" role="button" data-slide="prev">
          <img src={leftArrow} alt="leftArrow" className="arrow" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselRightControl" role="button" data-slide="next">
          <img src={rightArrow} alt="rightArrow" className="arrow" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Reviews
