import React from "react";
import MenuItem from "../MenuItem";

class Menu extends React.Component {
  render() {
    const { menuName, menuItems } = this.props;

    return (
      <div>
        <h1>{menuName} Menu</h1>

        <div className="menuItems">
          {menuItems.map((item) => (
            <MenuItem key={item.itemId} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;