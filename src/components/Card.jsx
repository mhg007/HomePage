import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const CustomCard = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://picsum.photos/100/100" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default CustomCard;
