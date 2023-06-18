import React from "react";
import { Layout, Space } from "antd";
import { ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import { Paths } from "../../../paths";

export const Header = () => {
  return (
    <Layout.Header>
      <Space>
        <NavLink to={Paths.home}>
          <HomeOutlined className="teamIcon" />
        </NavLink>
        <NavLink to={Paths.cart}>
          <ShoppingCartOutlined className="teamIcon" />
        </NavLink>
      </Space>
      {/* <Space>
				<Link to={Paths.login}>Войти</Link>
				<Link to={Paths.register}>Зарегистрироваться</Link>
			</Space> */}
    </Layout.Header>
  );
};
