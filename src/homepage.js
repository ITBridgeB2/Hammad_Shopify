import React from "react";
import { Link  } from "react-router-dom";
import styles from "./homepage.module.css"

export default function Home() {
    return(
        <div className={styles.bodycontainer}>
            <div>
        <h1 className={styles.head}>Shop-at-point</h1>
        <h2 className={styles.title}>
            We sell different kinds of products
            </h2>
       <div className={styles.image}><img src="/Images/logo.png" alt="none" width="500px" length="400px"/></div>
        <div>
        
        <Link to="/login">
                    <button className={styles.button}>Login</button>
                </Link>
               
        </div>
        </div></div>
    )
    
}