import { Row, Col, Card } from "antd";
import image1 from "../../assets/images/advanced-option.jpg";
import image2 from "../../assets/images/bg-hero.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/clean-design.jpg";
import image5 from "../../assets/images/modern-design.jpg";
import image6 from "../../assets/images/unlimited-features.jpg";

const { Meta } = Card;

const featureData = [
  {
    image: image1,
    title: "Modern Design",
  },
  {
    image: image2,
    title: "Blockchain",
  },
  {
    image: image3,
    title: "Data Science",
  },
  {
    image: image4,
    title: "Artificial Intelligence",
  },
  {
    image: image5,
    title: "IT infrastructure",
  },
  {
    image: image6,
    title: "Web Design",
  },
];

export default function AppFeature() {
  return (
    <div className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, modi?
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {featureData.map((item) => {
            return (
              <Col span={8} key={item.image}>
                <Card hoverable cover={<img alt="" src={item.image}></img>}>
                  <Meta title={item.title}></Meta>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
