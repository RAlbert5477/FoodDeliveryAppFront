import React from "react";

import {orderHours} from "../../data/orderHours";
import "./Schedule.css";

export const EmptySchedule = () => {

    return <>
        <div className="emptyOrder-box-title">

            <h2 className="emptyOrder-title">You Don't Have Any Orders</h2>
        </div>
        <div className="schedule-background">

            <div className="schedule-table">

            {
                orderHours
                    .map((item, key) =>
                        <div className="schedule-list" key={key}>
                            <div className="schedule-row" >{item.label}</div>
                        </div>

                    )
            }
        </div>
        </div>


    </>
}