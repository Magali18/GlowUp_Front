import { createSlice } from "@reduxjs/toolkit";
import image from '../image/417134192_7035273036527283_1575827752176715560_n.jpg'

const initialState ={
id: 12453231233,
name:"RELOJ ITALY",
price : "$435",
picture: image,
description:'Reloj acero quirurgico unisex negro con malla metalica',
date: 'Abril 2024'

}
export const cardSlice = createSlice({
    name: "product",
    initialState
    });



export const {} = cardSlice.actions;
export default cardSlice.reducer;
