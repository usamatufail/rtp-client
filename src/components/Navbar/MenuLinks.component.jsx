import React from "react";
import { Link } from "react-router-dom";
// Ant Design Components
import { Menu, Grid } from "antd";
import { DownOutlined } from "@ant-design/icons";
// Extracting Sub Components from Ant Design Components
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const { useBreakpoint } = Grid;

const MenuLinks = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <SubMenu
        key="sub1"
        title={
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ marginRight: "5px" }}>Discover</span>
            <DownOutlined />
          </span>
        }
      >
        <MenuItemGroup title="Categories">
          <Menu.Item key="setting:1">Discover 1</Menu.Item>
          <Menu.Item key="setting:2">Discover 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Set">
          <Menu.Item key="setting:3">Discover 1</Menu.Item>
          <Menu.Item key="setting:4">Discover 2</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="teach">
        <Link to="/teach">Teach on Gura</Link>
      </Menu.Item>
      <Menu.Item key="signup">
        <Link to="/signup">Sign up</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">Log in</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuLinks;
