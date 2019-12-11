import React from "react";
import "./Moods.scss"
import {emoji} from "../data/emoji"

const Moods = () => {

    return (
        <div class="mood-query">
            <h3>How are you feeling today?</h3>
            <div class="moods">
                {emoji.map(icon => (<img src={icon}/>))}
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