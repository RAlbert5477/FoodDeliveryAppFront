import React from "react";

import "./Home.css";
import delivery from './delivery.png'
import {Link} from "react-router-dom";


export const HomeBackground = () => {


    return <>
        <div className="home-background">
            <div className="delivery-box">
                <div className="delivery-box-title">
                    <h2 className="delivery-title">Online Delivery Services</h2>
                    <div className="delivery-box-description">

                        <p className="delivery-description">Add food from the "Food Menu" tab. Click the cart icon. Choose a delivery time for your order and buy meals. In the "Delivery Schedule" tab you can see your order </p>
                    </div>
                    <Link to="/food-menu">
                        <button className="delivery-btn">GET STARTED</button>
                    </Link>
                </div>
                <div className="delivery-box-img">
                    <img className="delivery-img" src={delivery} alt="photo of food delivery"/>
                </div>

            </div>
        </div>


    </>
}