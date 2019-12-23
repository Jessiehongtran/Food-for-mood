import React from "react";
import {foods} from "../data/foods";
import "./Foods.scss"

const Foods = () => {

    return (
        <div className="food">
            {foods.map(food => (
                <div className="eachfood">
                    <img className="foodpic" src={food.image}/>
                    <div className="info">
                        <div className="caption">
                            <p>{food.caption}</p>
                        </div>
                        <div className="mood">
                            <p>4</p>
                            <img src={food.mood}/>
                        </div>
                    </div>
                </div>
                )
            )}
        </div>
    )
}

export default Foods