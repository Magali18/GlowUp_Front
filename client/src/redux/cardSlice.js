import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cardSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        allProducts: (state, action) => {
            state.products = action.payload.products; 
            //console.log('New state after allProducts:', state.products);
        },
        addProduct: (state, action) => {
            const { name, cover_letter, price, date } = action.payload
            state.name = name
            state.cover_letter = cover_letter
            state.price = price
            state.date = date
        }
    },
});

export const { allProducts, addProduct } = cardSlice.actions; 
export default cardSlice.reducer;
