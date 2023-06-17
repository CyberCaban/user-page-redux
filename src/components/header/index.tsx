import React from "react";
import { Layout, Space } from "antd";
import { ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { Paths } from "../../../paths";

export const Header = () => {
	return (
		<Layout.Header>
			<Space>
				<Link to={Paths.home}>
					<HomeOutlined className={style.teamIcon} />
				</Link>
				<Link to={Paths.cart}>
					<ShoppingCartOutlined className={style.teamIcon} />
				</Link>
			</Space>
			{/* <Space>
				<Link to={Paths.login}>Войти</Link>
				<Link to={Paths.register}>Зарегистрироваться</Link>
			</Space> */}
		</Layout.Header>
	);
};
