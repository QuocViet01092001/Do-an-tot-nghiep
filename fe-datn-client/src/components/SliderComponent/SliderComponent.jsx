import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';

const SliderComponent = ({arrImages}) => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    sliderToShow: 1,
    sliderToScroll:1,
    autoplay: true,
    autoplaySpeed: 1000//<3000ms
}; 
  return (
    <Slider {...settings}>
        {arrImages.map((image) => {
            return(
                <Image src={image} alt="slider" preview= {false} width= "100%" height="274px"/>
            )
        })}
    </Slider>
  )
}

export default SliderComponent