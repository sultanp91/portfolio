import React from "react";
import { Carousel } from "react-responsive-carousel";

function ImageCarousel({ images, title }) {
  return (
    <Carousel autoPlay>
      {images.map((img) => (
        <div>
          <img src={img} alt="" />
          <p className="legend">{title}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
