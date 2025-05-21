import React from 'react';
import { Link  } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userDetailsService from './userdetails';
import styles from "./loginpage.module.css"




export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        userDetailsService.validateUser(formData.mobileNumber,formData.password).then((response) => {
            if (response.status === 200) {
                const firstName = response.data.firstName;
                alert("WELCOME- " +response.data);
                navigate("/category")
              } else {
                alert('TRY AGAIN');
              }
        })
        
        console.log('Form submitted:', formData);
      };



  return(
    <div>
    <form  onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label class="form-label">Mobile Number : </label>
        <input
          className='styles.formnumber'
          required
          id="mobileNumber"
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit number"
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formpassword}>
        <label class="form-label">Password : </label>
        <input
        className='formcontrol'
        placeholder="Enter your password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <Link to="/">
                          <button>Cancel</button>
                      </Link>
   <button type="submit">
   Login
 </button>
</form>
</div>
);
}