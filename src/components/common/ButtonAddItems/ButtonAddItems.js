import React, {useRef, useState} from 'react';

import "./ButtonAddItems.css";
import {FaMinus, FaPlus} from "react-icons/fa";

export const ButtonAddItems = ({food, addToCart}) => {
    const [foodCounter, setFoodCounter] = useState(0);

    const addItem =() =>{
        setFoodCounter(foodCounter+1);
    }
    const remItem =() =>{
        setFoodCounter(foodCounter-1);
    }

    const idInput = useRef(null);
    const titleInput = useRef(null);
    const caloriesInput = useRef(null);
    const carbsInput = useRef(null);
    const proteinInput = useRef(null);
    const fatInput= useRef(null);
    const priceInput = useRef(null);
    const imageInput = useRef(null);
    const quantityInput = useRef(null);


    const sendForm = async (e) => {
        e.preventDefault();
        console.log(idInput.current.value);
        console.log(foodCounter);
        await addToCart(
            idInput.current.value,
            titleInput.current.value,
            caloriesInput.current.value,
            carbsInput.current.value,
            proteinInput.current.value,
            fatInput.current.value,
            priceInput.current.value,
            imageInput.current.value,
            quantityInput.current.value,
        );

    }

    return<>
        <form
            method="POST"
            onSubmit={sendForm}
        >
            <input type="hidden" ref={idInput} name="id" value={food.id}/>
            <input type="hidden" ref={titleInput} name="title" value={food.title}/>
            <input type="hidden" ref={caloriesInput} name="calories" value={food.calories}/>
            <input type="hidden" ref={carbsInput} name="carbs" value={food.carbs}/>
            <input type="hidden" ref={proteinInput} name="protein" value={food.protein}/>
            <input type="hidden" ref={fatInput} name="fat" value={food.fat}/>
            <input type="hidden" ref={priceInput} name="price" value={food.price}/>
            <input type="hidden" ref={imageInput} name="image" value={food.image}/>
            <input type="hidden" ref={quantityInput} name="quantity" value={foodCounter}/>

            <div className="foodsMenu-items-btn">
                {foodCounter === 0
                    ? (
                        <div className="sendForm">
                            <button
                                type="submit"
                                className="item-active"
                                onClick={addItem}
                            >
                                ADD
                            </button>
                        </div>

                    ):(
                        <div className="item-not-active">
                            <button
                                className="btn-sign"
                                onClick={remItem}
                            >
                                <FaMinus/>
                            </button>
                            <div className="item-counter">
                                {foodCounter}
                            </div>
                            <button
                                className="btn-sign"
                                onClick={addItem}
                            >
                                <FaPlus/>
                            </button>
                        </div>
                    )

                }

            </div>
        </form>
    </>
}
