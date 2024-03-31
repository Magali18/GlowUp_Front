import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getProduct = () => {
    return async (dispatch) => {
      const { data } = await axios('http://localhost:3001/allProducts')
  
      dispatch(allProducts ({ resultProducts: data }))
    }
  }