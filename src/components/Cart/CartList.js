import React, {useRef, useState} from "react";
import {CartListItems} from "./CartListItems";
import {orderHours} from "../../data/orderHours";


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
        <CartListItems cartList={a} checkQuantity={checkQuantity}/>
        <h1>Cena: {((b).toFixed(2))} $</h1>
        <form onSubmit={sendForm} >

            <input type="hidden" ref={timeInput}  name="order" value={selects}/>
            <input type="hidden" ref={orderInput}  name="order" value={JSON.stringify(a)}/>
            <p>Choose a delivery time </p>
            <select value={selects} onChange={e=>setSelects(e.target.value)}>
                {orderHours.map((option, key) => (
                    <option key={key}>{option.label}</option>
                ))}

            </select>
            <button type="submit" className="btn-but" onMouseUp={clearCart}>BUY</button>
        </form>
    </>
}