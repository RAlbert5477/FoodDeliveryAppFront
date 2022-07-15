import React, {useState} from "react";

export const ScheduleTabs = ({orderList}) => {

    const [newOrderList, setNewOrderList] = useState(([...orderList].reduce((item, food)=>{
        return {...item, [food.id]: food}
    }, [])))
    const a = Object.keys(newOrderList).map(key => {
        return newOrderList[key]
    })

    const checkQuantity = (quantity) => {
        return quantity>0;
    }



    return <>
        <div className="schedule-order">


        {a
            .map((item, key) =>(
                <div
                    key={key}
                    className="order">
                    <div className="order-item">
                        <p className="orderId">
                            Order ID: {item.id}
                        </p>
                    </div>
                    <div className="order-item">
                        <p>
                            Your order will be delivered at {item.time}
                        </p>
                    </div>

                </div>
            ))
        }
        </div>
    </>
}