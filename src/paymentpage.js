import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import cartdetails from './cartdetails';

const Payment = () => {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await cartdetails.getCart();
        setCartData(response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCart();
  }, []);

  const handleSubmit = async () => {
  try {
    await cartdetails.clearCart();      
    setCartData([]);                   
    navigate('/success');               
  } catch (error) {
    console.error('Error clearing cart:', error);
    alert('Failed to process payment.');
  }
};

  return (
    <div>
      <h2>Cart Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.total_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSubmit}
        style={{ display: 'block', marginTop: '10px', width: '200px' }}
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default Payment;
