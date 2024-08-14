import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchNews = async (country = 'us', category = '', page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country,
        category,
        page,
        pageSize,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
