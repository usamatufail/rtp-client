import React, { useState } from "react";
import { Link } from "react-router-dom";
// Ant Design Components
import { Drawer, Button, Typography } from "antd";
// Custom Components
import MenuLinks from "./MenuLinks.component";
// Styles
import "./Navbar.styles.scss";

const Navbar = () => {
  // State to handle drawer current state
  const [visible, setVisible] = useState(false);
  // Function to handle show drawer
  const showDrawer = () => {
    setVisible(true);
  };
  // Function to handle drawer close
  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Link to="/">
          <Typography.Title level={3}>Rich To Poor</Typography.Title>
        </Link>
      </div>
      <div className="menuCon">
        <div className="rightMenu">
          <MenuLinks />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <MenuLinks />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
