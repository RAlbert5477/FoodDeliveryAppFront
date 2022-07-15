import React from 'react';

import "./Cart.css";
import {Link} from "react-router-dom";

export const EmptyCart = () => {

    return <>
        <div className="Cart-background">
                <div className="Cart-box">

                    <div className="Cart-box-title">

                        <h2 className="Cart-title">Cart</h2>


                    <p className="Cart-description">There are no items in your cart.</p>
                    <Link to="/food-menu">
                        <button className="continue-shopping-btn">Continue Shopping</button>
                    </Link>
                    </div>
                <div className="summary-box">
                    <p className="summary-title">Total: 0$</p>
                </div>
                </div>


        </div>

    </>
}