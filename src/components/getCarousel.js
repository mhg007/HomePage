import React from "react";
import { Carousel } from "antd";

const CustomCarousel = () => (
  <>
    <Carousel arrows infinite={false} autoplay>
      <div>
        <img src="https://picsum.photos/1500/300" alt="mountains" />
      </div>
      <div>
        <img src="https://picsum.photos/1500/300" alt="trees" />
      </div>
      <div>
        <img src="https://picsum.photos/1500/300" alt="animals" />
      </div>
      <div>
        <img src="https://picsum.photos/1500/300" alt="humans" />
      </div>
    </Carousel>
  </>
);
export default CustomCarousel;
