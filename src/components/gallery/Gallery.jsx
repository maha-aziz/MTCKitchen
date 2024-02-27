import React from 'react'
import './gallery.css'
import Button from '../shared/button/Button'
import pic1 from '../assets/Bitmap-2.png'
import pic2 from '../assets/Bitmap-3.png'
import pic3 from '../assets/Bitmap.png'
import pic4 from '../assets/Bitmap-1.png'

const Gallery = () => {
  return (
    <div className="gallery">
      <p className="customer-heading">Customer Gallery</p>
      <div className="gallery-container">
        <div className="gallery-images flexSB">
          <img src={pic1} />
          <img src={pic2} />
          <img src={pic3} />
          <img src={pic4} />
        </div>
      </div>
      <Button title="View More" />
    </div>
  )
}

export default Gallery
