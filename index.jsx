import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="1.png"
          alt="First slide"
          height="1100px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="2.png"
          alt="Second slide"
          height="1100px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.png"
          alt="Third slide"
          height="1100px"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
