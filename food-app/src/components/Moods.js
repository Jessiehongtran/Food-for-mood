import React from "react";
import "./Moods.scss"
import {emoji} from "../data/emoji"

const Moods = () => {

    return (
        <div class="mood-query">
            <h3>How are you feeling today?</h3>
            <div class="moods">
                {emoji.map(icon => (
                    <div className="container">
                        <img className="image" src={icon.image}/>
                        {/* <img className="image" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576009802/iconfinder_4_Emoji_exhausted_emoticon_tired_emoji_tired_face_3129749_1_kntuhd.png"/>  */}

                        <div className="overlay">
                            <div className="text">{icon.name}</div>
                            {/* <div className="text">Awesome</div> */}
                        </div>
                    </div>
                ))} 
            </div>
            {/* <select id="moods">
                <option>Awesome</option>
                <option>Amazing</option>
                <option>Great</option>
                <option>Good</option>
                <option>Okay</option>
                <option>Hmm</option>
                <option>Bored</option>
                <option>Sad</option>
                <option>Stressed</option>
                <option>Depressed</option>
                <option>Frustrated</option>
            </select> */}
        </div>
    )
}

export default Moods