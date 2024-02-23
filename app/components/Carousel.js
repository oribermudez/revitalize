import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel = ({ slides }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className='relative'>
          <Image src={slide.image} alt={`Slide ${index + 1}`} width={400} height={400} className="w-full h-36 object-cover" />
          <div className='absolute text-white font-bold bg-black/20 flex justify-center items-center bottom-0 p-2 w-full'>{slide.title}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
