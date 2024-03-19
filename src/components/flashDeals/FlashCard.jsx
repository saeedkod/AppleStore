import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Link} from "react-router-dom"
import productItems from "../Data"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({  addToCart }) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }


  const settings = {
    dots:false ,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 994,
        settings: {
          dots:false ,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots:false ,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      }
    ]
  };


  return (
    <>
      <Slider  {...settings}>
        
        {productItems?.map((productItems ) => {
          return (
            <div className='box' key={productItems.id} >
              <div className='product mtop'>
                <div className='img'>
                <Link to={`/Productdet/${productItems.id}`}>
            
                  <img src={productItems.cover} alt='' />
               </Link>
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div >
                  <h3>{productItems.name}</h3>
                  <div className='price'>
                    <h4>${productItems.price}.00 </h4>
                  
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
             
          )
        })}
      </Slider>
      
       <Link to="/Productlist" >  
      <button className="btn">seemore</button>
       </Link>
        
      
      </>
  )
}

export default FlashCard
