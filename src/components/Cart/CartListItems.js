import React from 'react';

import "./Cart.css";




export const CartListItems = (props) => {


    return <>
        {props.cartList
            .filter(item => props.checkQuantity(item.quantity))
            .map( (item, key) => (
                <div className="cart-products" key={key}>

                    <img
                        className="cart-products-img"
                        alt={"photo of the meal " + item.title}
                        src={item.image}
                    />
                    <div className="cart-products-description">
                        <div className="cart-products-title">
                            <p>{item.title}</p>
                        </div>
                        <div className="cart-product-calories">

                            <h3>  In 1 serving ({item.calories}  kcal) </h3>
                            <p>Carbs:  {item.carbs}g </p>
                            <p>Fat:  {item.fat}g</p>
                            <p> Protein: {item.protein}g </p>


                        </div>
                        <div className="cart-products-quantity">

                            <h3>Amount: {item.quantity} - {((Number(item.price)*Number(item.quantity)).toFixed(2))} $</h3>
                        </div>

                    </div>

                </div>
            ))}
    </>
}