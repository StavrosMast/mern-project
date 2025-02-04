import axios from 'axios';

const API_URL = '/api'; // Adjust according to your backend routes

export const fetchHello = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
