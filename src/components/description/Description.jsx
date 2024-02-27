import React from 'react'
import './description.css'
import diningImage from '../assets/dining.png'
import Button from '../shared/button/Button'

const Description = () => {
  return (
    <div>
      <section className="description">
        <div className="box flexSB">
          <div className="left">
            <img src={diningImage} alt="Dining Area" />
          </div>
          <div className="right">
            <p className="small-text">Quality Craftmanship From Build To Delivery</p>
            <h3 className="description-heading">Discover the beauty of a handmade kitchen</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus
              vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu
              pharetra tincidunt, mauris purus ultrices.
            </p>
            <Button title="About Us" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Description
