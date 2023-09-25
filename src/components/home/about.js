import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"></i>,
    title: "High performance",
    content: "lorem pnostro mel Amomnu",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "High performance",
    content: "lorem pnostro mel Amomnu",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "High performance",
    content: "lorem pnostro mel Amomnu",
  },
];

function AppAbout() {
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo ex
            suscipit ab impedit. Dicta praesentium, iure laudantium repellendus
            enim in, obcaecati qui sed doloremque est unde sapiente velit
            veniam.
          </p>
        </div>

        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            fugit cupiditate provident nihil consequuntur maxime? Atque,
            perferendis, accusamus saepe porro doloribus necessitatibus hic
            aliquid beatae, accusantium reprehenderit at. Voluptate, sunt!
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col span={8} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                </div>
                {item.content}
                {item.title}
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;
