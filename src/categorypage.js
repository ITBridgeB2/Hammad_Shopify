import React from "react";
import "./categorypage.css";
import { Link  } from "react-router-dom";

export default function Category() {
    return (
        <div>
            <div style={{ marginBottom: "20px" }} >
                
                <p>Shoes</p>
                <Link to="/cat-1">
                <button>Category-1</button>
                </Link>

                </div>
                
                <div style={{ marginBottom: "20px" }}>
                
                <p>Pants</p>
                <Link to="/cat-2">
                <button>Category-2</button>
                </Link>
                </div>

                <div>
                
                <p>Caps</p>
                <Link to="/cat-3">
                <button>Category-3</button>
                </Link>
                </div>
                
            </div>

    );
}
