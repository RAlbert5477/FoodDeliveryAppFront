import React, {useRef, useState} from "react";
import {CartListItems} from "./CartListItems";
import {orderHours} from "../../data/orderHours";

import "./Cart.css";

export const CartList = ({cartList, clearCart, createOrder}) => {
    const [selects, setSelects] = useState("9:00");

    const orderInput = useRef(null);
    const timeInput = useRef(null);

    const [uniqCart, setUniqCart] = useState(([...cartList].reduce((item, food)=>{
        return {...item, [food.id]: food}
    }, [])))
    const a = Object.keys(uniqCart).map(key => {
        return uniqCart[key]
    })

    const checkQuantity = (quantity) => {
        return quantity>0;
    }

    const b =((a
        .reduce((b,v) => b + (Number(v.price))*(Number(v.quantity)) , 0 )))

    const sendForm = async (e) => {
        e.preventDefault();
        console.log(orderInput.current.value);
        console.log(timeInput.current.value);
        await createOrder(
            timeInput.current.value,
            orderInput.current.value,

        )

    }

    return <>

        <div className="Cart-box-product">
            <div className="Cart-box-title">

            <CartListItems cartList={a} checkQuantity={checkQuantity}/>
            </div>
            <div className="summary-total-box">

            <div className="summary-box-form">
                <form className="summary-form" onSubmit={sendForm} >

                    <input type="hidden" ref={timeInput}  name="order" value={selects}/>
                    <input type="hidden" ref={orderInput}  name="order" value={JSON.stringify(a)}/>
                    <p className="summary-form-title">Choose a delivery time </p>
                    <select className="summary-form-select" value={selects} onChange={e=>setSelects(e.target.value)}>
                        {orderHours.map((option, key) => (
                            <option key={key}>{option.label}</option>
                        ))}

                    </select>
                    <button type="submit" className="summary-btn" onMouseUp={clearCart}>Order</button>
                    <div className="summary-total">
                        <p>Total: {((b).toFixed(2))} $</p>
                    </div>

                </form>
            </div>


            </div>

        </div>

    </>
}