import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const CustomCard = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="Judge" src="images/pexels-august-de-richelieu-4427610.jpg" style={{objectFit:"cover"}} />}
  >
    <Meta title="August De Richelieu" description="Magistrate" />
  </Card>
);
export default CustomCard;
