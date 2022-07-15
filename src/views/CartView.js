import React, {useEffect, useState} from 'react';
import {Cart} from "../components/Cart/Cart";
import {EmptyCart} from "../components/Cart/EmptyCart";

export const CartView = () => {
    const [listOfProducts, setListOfProducts] = useState(null);

    const refreshCart = async () => {
        setListOfProducts(null);
        const res = await fetch("http://localhost:3001/cart");
        const data = await res.json();

        setListOfProducts(data)
    };

    useEffect(()=>{
        refreshCart();
    }, [])


    return <>

        {
            listOfProducts !== null && listOfProducts.length !== 0
                ? <Cart cartList={listOfProducts} onCartChanged={refreshCart}/>
                : <EmptyCart/>
        }

    </>
};