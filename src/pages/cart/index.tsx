import { addToCart, removeFromCart, changeAmount } from "../../store/cartSlice";
import { Layout } from "../../components/layout";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

export default function Cart(): JSX.Element {
	const items = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	function incrementAmount(text: string) {
		dispatch(addToCart({ text }));
	}
	function decrementAmount(text: string) {
		dispatch(removeFromCart({ text }));
	}
	const handleAmount = (text: string, amount: number) => {
		if (isNaN(amount)) {
			return;
		}
		console.log(amount);
		dispatch(changeAmount({ text, amount }));
	};

	return (
		<Layout>
			<ul>
				{items.map((item: { id: string; text: string; price: number; amount: number }) => (
					<li key={item.id}>
						{item.text}
						<span> {item.price} руб.</span>
						<a onClick={() => incrementAmount(item.text)}>+</a>
						<input onChange={(e) => handleAmount(item.text, parseInt(e.target.value))} value={item.amount} style={{ textAlign: "center" }} />
						<a onClick={() => decrementAmount(item.text)}>-</a>
						<DeleteOutlined onClick={() => handleAmount(item.text, 0)} style={{ cursor: "pointer" }} />
					</li>
				))}
			</ul>
			<h2>Итого {items.reduce((accumulator: number, currValue: { price: number; amount: number }) => accumulator + currValue.price * currValue.amount, 0)}</h2>
		</Layout>
	);
}
