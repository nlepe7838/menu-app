import React from "react";
import Menu from "../Menu";

const MenuApp = ({ data }) => {
  return (
    <div className="App">
      {data.map((menu) => (
        <Menu
          key={menu.menuName}
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        />
      ))}
    </div>
  );
};

export default MenuApp;