import React from 'react';

import "../App.css";
import data from '../data/mock-data.json';
import {FoodMenuList} from "../components/FoodMenuList/FoodMenuList";


export const FoodMenuView = () => {

    return <>
        {/*<FoodSelectionMenu></FoodSelectionMenu>*/}
        <div className="selectionFood">
            <div className="selectionFood-bar">
                <button className="selectionFood-bar-icon"/>
                <button className="selectionFood-bar-icon"/>
                <button className="selectionFood-bar-icon"/>
                <button className="selectionFood-bar-icon"/>
            </div>
        </div>
        <FoodMenuList foodData={data}/>
    </>
};