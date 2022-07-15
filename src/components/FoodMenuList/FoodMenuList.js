import React, {useState} from 'react';

import "./FoodList.css";
import { FaSearch } from "react-icons/fa";
import {ButtonAddItems} from "../common/ButtonAddItems/ButtonAddItems";
import {Link} from "react-router-dom";
import axios from "axios";

export const FoodMenuList = (props) => {
    const [searchWord, setSearchWord] = useState("");


    const addToCart = async (
        idInput,
        titleInput,
        caloriesInput,
        carbsInput,
        proteinInput,
        fatInput,
        priceInput,
        imageInput,
        quantityInput
    ) => {
            const res = await axios.post(`http://localhost:3001/cart`, {
                id: idInput,
                title: titleInput,
                calories: caloriesInput,
                carbs: carbsInput,
                protein: proteinInput,
                fat: fatInput,
                price: priceInput,
                image: imageInput,
                quantity: quantityInput
            })

    }


    return <>
        <div className="searchMenu">
            <div className="searchBar">
                <input
                    id="search"
                    className="searchInput"
                    type="text"
                    placeholder="Search..."
                    onChange={
                        e => setSearchWord(e.target.value)
                    }/>
                <label htmlFor="search">
                    <div className="searchIcon">
                        <FaSearch/>
                    </div>
                </label>
            </div>
        </div>
        <div className="foodsContent">
            <div className="foodsMenu">
                {props.foodData.filter((val)=>{
                    if (searchWord === ""){
                        return val
                    }else if (val.title.toLowerCase().includes(searchWord.toLowerCase())){
                        return val
                    }
                }).map((val)=>
                        <div className="foodsMenu-items" key={val.id}>
                            <Link
                                className="foodLink"
                                to={val.id}>
                            <img
                                className="foodsMenu-items-img"
                                alt={"photo of the meal " + val.title}
                                src={val.image}
                            />
                            <div className="foodsMenu-items-title">
                                <p>{val.title}</p>

                            </div>
                            </Link>

                            <div className="foodsMenu-items-description">
                                <p className="items-price">{((Number(val.price)).toFixed(2))} $</p>

                                <ButtonAddItems
                                    food={val}
                                    addToCart={addToCart}
                                    className="foodsMenu-items-btn"/>
                            </div>
                        </div>

                )}
            </div>

        </div>
    </>

};