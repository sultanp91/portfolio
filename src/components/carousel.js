import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel({ images, title }) {
  return (
    <Carousel>
      {images.map((img) => (
        <div>
          <img src={img} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
