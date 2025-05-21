import axios from 'axios';

const API_URL = 'http://localhost:9888/products';

const cartdetails = {
  cat1: (quantity) => axios.post(`${API_URL}/shoes`, { quantity }),
  cat2: (quantity) => axios.post(`${API_URL}/pants`, { quantity }),
  cat3: (quantity) => axios.post(`${API_URL}/caps`, { quantity }),
  clearCart: () => axios.delete('http://localhost:9888/products'),

  getCart: () => axios.get('http://localhost:9888/api/products')
};


export default cartdetails;
