import React from "react";
import { Menu } from "antd";

function AppHeader() {
  const MenuList = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "about",
      label: "About",
    },
    {
      key: "features",
      label: "Features",
    },
    {
      key: "howitworks",
      label: "How It Works",
    },
    {
      key: "faq",
      label: "FAQ",
    },
  ];

  const menuItems = MenuList.map((item) => {
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
  });

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="https://www.alibaba.com/">
            <img
              alt=""
              src="https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png"
            />
          </a>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          {menuItems}
        </Menu>
      </div>
    </div>
  );
}

export default AppHeader;
