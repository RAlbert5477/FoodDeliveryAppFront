import React, {useState} from "react";

import "./Schedule.css";

export const ScheduleTabs = ({orderList}) => {

    const [newOrderList, setNewOrderList] = useState(([...orderList].reduce((item, food)=>{
        return {...item, [food.id]: food}
    }, [])))
    const a = Object.keys(newOrderList).map(key => {
        return newOrderList[key]
    })

    return <>
        <div className="schedule-order">
        {a
            .map((item, key) =>(
                <div
                    key={orderList[key].id}
                    className="order">

                    <div className="order-box">
                        <p className="order-title">
                            Your Order Will Be Delivered Tomorrow At <span className="order-time">{item.time}</span>
                        </p>
                            <div className="order-box-item">

                                {

                                    (orderList[key].order).map((product, index) =>
                                        <div className="order-box-item-description">
                                            <img className="order-img" src={orderList[key].order[index].image} alt={orderList[key].order[index].title}/>
                                            <h3>{orderList[key].order[index].title}</h3>
                                            <p>Amount {orderList[key].order[index].quantity}</p>
                                        </div>
                                    )
                                }
                            </div>

                    </div>

                </div>
            ))
        }

        </div>
    </>
}