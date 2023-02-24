import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from '../asset/image/category_01.jpg';
import Slide2 from '../asset/image/category_02.jpg';
import Slide3 from '../asset/image/category_03.jpg';

const SimpleSlider = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="puma-slider">
        <Slider {...settings}>
          <div className="slide slide1">
            <img src={Slide1}/>
          </div>
          <div className="slide slide2">
            <img src={Slide2}/>
          </div>
          <div className="slide slide3">
            <img src={Slide3}/>
          </div>
        </Slider>
      </div>
    );
}
export default SimpleSlider;