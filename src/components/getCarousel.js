import React from "react";
import { Carousel } from "antd";
import './styles.css'; // New CSS file for styling

const CustomCarousel = () => (
  <div className="carousel-container">
    <Carousel
      arrows
      infinite={true}
      autoplay
    >
      <div>
        <img src="images/court-3.jpg" alt="library" />
      </div>
      <div>
        <img src="images/court-4.jpg" alt="books" />
      </div>
      <div>
        <img src="images/court-2.jpg" alt="animals" />
      </div>
      <div>
        <img src="images/court-1.jpg" alt="humans" />
      </div>
    </Carousel>
  </div>
);

export default CustomCarousel;
