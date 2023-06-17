import { Card, Typography } from "antd";
import { Layout } from "../../components/layout";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import React from "react";

const Products = [
	{
		name: "Ручка",
		price: Math.round(Math.random() * 1000),
	},
	{
		name: "Молоко",
		price: Math.round(Math.random() * 1000),
	},
	{
		name: "Кошелек",
		price: Math.round(Math.random() * 1000),
	},
	{
		name: "Книга",
		price: Math.round(Math.random() * 1000),
	},
	{
		name: "Лампа",
		price: Math.round(Math.random() * 1000),
	},
	{
		name: "Колонка",
		price: Math.round(Math.random() * 1000),
	},
	{
		name: "Зубочистка",
		price: Math.round(Math.random() * 1000),
	},
];

export default function Home(): JSX.Element {
	const dispatch = useDispatch();

	const addItem = (text: string, price: number) => {
		dispatch(addToCart({ text, price }));
	};

	return (
		<Layout>
			{Products.map((item, key) => (
				<Card key={key} title={item.name} extra={<a onClick={() => addItem(item.name, item.price)}>+</a>}>
					<Typography.Text>Цена: {item.price + " руб."}</Typography.Text>
				</Card>
			))}
		</Layout>
	);
}
