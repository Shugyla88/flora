import React from 'react'
import './Slider.styles.css'

const Slider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.sanity.io/images/y346iw48/production/b9275e647cf440fa710bfc1d063bc933db8521d5-2880x1440.jpg?w=1536&h=768&auto=format" className="d-block w-100 slider-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.sanity.io/images/y346iw48/production/5845cf124abf466538ee1d8a5b5ee9104b272ad4-2703x1809.jpg?w=1536&h=1028&auto=format" className="d-block w-100 slider-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.sanity.io/images/y346iw48/production/0b8007aa28a7fb37800f81f0011f9e2e2b81bed3-2820x1953.jpg?w=1536&h=1064&auto=format" className="d-block w-100 slider-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider
