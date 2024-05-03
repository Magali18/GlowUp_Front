import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { allProducts } from './cardSlice'; // Importa la acción allProducts desde cardSlice

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { dispatch }) => { // Modifica para recibir dispatch como segundo argumento
    try {
      const response = await axios.get('http://localhost:3001/allProducts');
      dispatch(allProducts({ products: response.data })); // Llama a dispatch con allProducts

      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; 
    }
  }
);
