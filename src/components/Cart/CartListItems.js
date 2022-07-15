import React from 'react';

export const CartListItems = (props) => {


    return <>
        {props.cartList
            .filter(item => props.checkQuantity(item.quantity))
            .map( (item, key) => (
                <div className="foodsMenu-items" key={key}>

                    <img
                        className="foodsMenu-items-img"
                        alt={"photo of the meal " + item.title}
                        src={item.image}
                    />
                    <div className="foodsMenu-items-title">
                        <p>{item.title}</p>
                        <hr/>
                        <p>{item.quantity} amount </p>

                    </div>

                </div>
            ))}
    </>
}