import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartItems",
	initialState: {
		items: [{ id: "2023-06-17T15:29:46.179Z", text: "Жвачка", price: 2, amount: 1 }],
	},
	reducers: {
		addToCart(state, action) {
			const Product = state.items.find((item) => item.text == action.payload.text);
			if (Product) {
				Product.amount += 1;
				return;
			}
			state.items.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				price: action.payload.price,
				amount: 1,
			});
		},
		removeFromCart(state, action) {
			const Product = state.items.find((item) => item.text == action.payload.text);
			if (Product) {
				Product.amount -= 1;
			}
			if (Product.amount <= 0) {
				state.items = state.items.filter((item) => item.text !== Product.text);
			}
		},
		changeAmount(state, action) {
			const Product = state.items.find((item) => item.text == action.payload.text);
			if (Product) {
				Product.amount = action.payload.amount;
			}
			if (Product.amount <= 0) {
				state.items = state.items.filter((item) => item.text !== Product.text);
			}
		},
	},
});

export const { addToCart, removeFromCart, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;
