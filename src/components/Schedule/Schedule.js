import React, {useEffect, useState} from 'react';
import {ScheduleTabs} from "./ScheduleTabs";
import {EmptySchedule} from "./EmptySchedule";

export const Schedule = () => {
    const [orderList, setOrderList] = useState(null);

    const refreshOrder = async () => {
        setOrderList(null);
        const res = await fetch("http://localhost:3001/order");
        const data = await res.json();
        console.log(data)
        setOrderList(data)
    };

    useEffect(()=>{
        refreshOrder();
    }, [])

    return <>

        {
            orderList === null
                ? <EmptySchedule/>
                : (orderList.length === 0
                    ? <EmptySchedule/>
                    : <ScheduleTabs orderList={orderList}/>)

        }
    </>
}