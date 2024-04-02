import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/allProducts');
      console.log(response.data); 
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; 
    }
  }
);
