import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cartdetails from "./cartdetails";
import "./categorypage.css";

const Category2 = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const handleBuy = () => {
      setCounter(counter + 1);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await cartdetails.cat2(counter);
        if (response.status === 200) {
          alert("Uploaded cart 2");
          navigate("/pay");
        } else {
          alert("TRY AGAIN");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the data.");
      }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Category-2</h2>
                <h2>Pants</h2>
                <div className="category-row">
                    <div className="product-card">
                        <img src="/Images/pants-1.webp" alt="pant-1" width="300" height="300" />
                         <button type="button" onClick={handleBuy}>Buy</button>
                    </div>
                    <div className="product-card">
                        <img src="/Images/pant-2.webp" alt="pant-2" width="300" height="300" />
                         <button type="button" onClick={handleBuy}>Buy</button>
                    </div>
                    <div className="product-card">
                        <img src="/Images/pant-3.webp" alt="pant-3" width="300" height="300" />
                         <button type="button" onClick={handleBuy}>Buy</button>
                    </div>
                        <div>
                            <label>Number of products:</label>
                            <input type="number" value={counter} readOnly />
                            <button
              type="submit"
              style={{ display: 'block', marginTop: '10px', width: '100px', marginLeft: '150px' }}
            >
              Pay
            </button>
            </div>
            </div> 
        </form>
        </div>
    );
}


export default Category2;