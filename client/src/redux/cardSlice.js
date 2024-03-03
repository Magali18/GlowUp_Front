import { createSlice } from "@reduxjs/toolkit";

const initialState ={
id: 333,
name:"prueba name",
price : "$435",
picture:""
}
export const cardSlice = createSlice({
    name: "product",
    initialState
    });
console.log(initialState)


export const {} = cardSlice.actions;
export default cardSlice.reducer;
