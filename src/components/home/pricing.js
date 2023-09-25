import { Card, List, Button } from "antd";

const data = [
  {
    title: "Basic",
    content: [
      {
        price: "RM 20",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Acess from anywhere",
      },
    ],
  },
  {
    title: "Premium",
    content: [
      {
        price: "RM 50",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Acess from anywhere",
      },
    ],
  },
  {
    title: "Enterprise",
    content: [
      {
        price: "RM 100",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Acess from anywhere",
      },
    ],
  },
];
export default function AppPricing() {
  return (
    <div className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose your plan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dicta.
          </p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="primary" size="large">
                  <i className="fab fa-telegram-plane"></i>
                  Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
