import React from "react";
import {foods} from "../data/foods";
import "./Foods.scss"

const Foods = (props) => {

    return (
        <div className="food">
            {foods.map(food => {
                if (props.awesomeMood && food.mood == 1){
                    return (
                    <div className="eachfood">
                        <img className="foodpic" src={food.image}/>
                        <div className="info">
                            <div className="caption">
                                <p>{food.caption}</p>
                            </div>
                            <div className="mood">
                                <p>4</p>
                                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008467/iconfinder_1_Emoji_happy_smiley_surprised_emoticon_3129756_fxxwqb.png"/>
                            </div>
                        </div>
                    </div>
                    )
                }
                else if (props.greatMood && food.mood == 2){
                    return (
                    <div className="eachfood">
                        <img className="foodpic" src={food.image}/>
                        <div className="info">
                            <div className="caption">
                                <p>{food.caption}</p>
                            </div>
                            <div className="mood">
                                <p>4</p>
                                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008440/iconfinder_7_Excited_laughing_smiley_happy_joyful_3129753_yron8f.png"/>
                            </div>
                        </div>
                    </div>
                    )
                }
                else if (props.okayMood && food.mood == 3){
                    return (
                    <div className="eachfood">
                        <img className="foodpic" src={food.image}/>
                        <div className="info">
                            <div className="caption">
                                <p>{food.caption}</p>
                            </div>
                            <div className="mood">
                                <p>4</p>
                                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008436/iconfinder_9_Emoji_happy_smiley_surprised_emoticon_3129755_b1ykdv.png"/>
                            </div>
                        </div>
                    </div>
                    )
                }
                else if (props.ehhMood && food.mood == 4){
                    return (
                    <div className="eachfood">
                        <img className="foodpic" src={food.image}/>
                        <div className="info">
                            <div className="caption">
                                <p>{food.caption}</p>
                            </div>
                            <div className="mood">
                                <p>4</p>
                                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576009802/iconfinder_4_Emoji_exhausted_emoticon_tired_emoji_tired_face_3129749_1_kntuhd.png"/>
                            </div>
                        </div>
                    </div>
                    )
                }
                else if (props.badMood && food.mood == 5){
                    return (
                    <div className="eachfood">
                        <img className="foodpic" src={food.image}/>
                        <div className="info">
                            <div className="caption">
                                <p>{food.caption}</p>
                            </div>
                            <div className="mood">
                                <p>4</p>
                                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008442/iconfinder_11_Emoticons_smiley_laughing_face_face_smiley_laughing_tears_3129752_sinxh9.png"/>
                            </div>
                        </div>
                    </div>
                    )
                }
               
            }
            )}
        </div>
    )
}

export default Foods