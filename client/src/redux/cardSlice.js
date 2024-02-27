import { createSlice } from "@reduxjs/toolkit";

const initialState ={
id: 333,
name:"prueba name",
price : "$435",
picture:""
}
export const cardSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        addProduct : (state,action )=>{
            const {id, name, price,picture} = action.payload;
            state.id = id
            state.name = name 
            state.price = price
            state.picture = picture
        }
    }
});
export const {addProduct} = cardSlice.actions;
export default cardSlice.reducer;
