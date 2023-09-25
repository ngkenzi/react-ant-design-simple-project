import React from "react";
import { Collapse, Button } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

export default function AppFaq() {
  return (
    <div className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <Collapse items={items} defaultActiveKey={["1"]} />
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Recusandae deserunt vel
            dignissimos corrupti totam.
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}
