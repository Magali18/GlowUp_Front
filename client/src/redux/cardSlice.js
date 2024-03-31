import { createSlice } from "@reduxjs/toolkit";
import image from '../image/417134192_7035273036527283_1575827752176715560_n.jpg'

const initialState = {
    name: "",
    cover_letter: '',
    price: "",
    picture: image,
    date: 'Abril 2024',
}
export const cardSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { name, cover_letter, price, date } = action.payload
            state.name = name
            state.cover_letter = cover_letter
            state.price = price
            state.date = date
        }

    }
});
export const { } = cardSlice.actions;
export default cardSlice.reducer;
