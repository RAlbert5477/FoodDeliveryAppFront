import React, {useState, useRef} from "react";
import {CartList} from "./CartList";
import axios from "axios";

import "./Cart.css";

export const Cart = (props) => {

    const clearCart = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3001/cart`,{
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        });
        props.onCartChanged();
    };

    const createOrder = async (
        timeInput,
        orderInput,
    ) => {
        const res = await axios.post(`http://localhost:3001/order`, {
            time: timeInput,
            order: (JSON.parse(orderInput)),
        })

    }



    return <div className="Cart-background">
            <CartList cartList={props.cartList} clearCart={clearCart} createOrder={createOrder}/>
        </div>

    ;
}