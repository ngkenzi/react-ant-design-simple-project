import React from "react";
import { Carousel, Button } from "antd";

const items = [
  {
    key: "1",
    title: "Web and mobile payment built for developers",
    content: "An vim odio ocurrent consetetur, justo contituto lorem",
  },
  {
    key: "2",
    title: "Providing IT services",
    content: "An vim odio ocurrent consetetur, justo contituto lorem",
  },
  {
    key: "3",
    title: "Banking payment secure",
    content: "An vim odio ocurrent consetetur, justo contituto lorem",
  },
];
const AppHero = () => {
  return (
    <div className="heroBlock">
      <Carousel autoplay autoplaySpeed={1000}>
        {/*to access each element in items array and map them to produce each element.content */}
        {items.map((item) => {
          return (
            <div className="container-fluid" key={item.key}>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button
                    style={{
                      backgroundColor: "#ff6a00",
                      borderColor: "#ff6a00",
                      color: "#ffffff",
                    }}
                    type=""
                    size="large"
                  >
                    Learn more
                  </Button>
                  <Button size="large">
                    <i className="fas fa-desktop"></i>Watch a demo
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AppHero;
