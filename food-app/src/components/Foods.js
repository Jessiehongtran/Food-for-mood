import React from "react";
import {foods} from "../data/foods";
import "./Foods.scss"

const Foods = () => {

    return (
        <div className="food">
            {foods.map(food => (
                <div className="eachfood">
                    <img className="foodpic" src={food.image}/>
                    <p className="caption">{food.caption}</p>
                </div>
                )
            )}
        </div>
    )
}

export default Foods