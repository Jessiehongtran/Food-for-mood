import React from "react";
import "./Moods.scss"

const Moods = (props) => {

    return (
        <div class="mood-query">
            <h3>How are you feeling today?</h3>
            <div class="moods">
                <div className="container">
                    <img className="image"  src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008467/iconfinder_1_Emoji_happy_smiley_surprised_emoticon_3129756_fxxwqb.png"/>
                    <div className="overlay" onClick={() => props.setAwesomeMood(true)}>
                        <div className="text">awesome</div>
                    </div>
                </div>
                <div className="container">
                    <img className="image" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008440/iconfinder_7_Excited_laughing_smiley_happy_joyful_3129753_yron8f.png"/>
                    <div className="overlay" onClick={() => props.setGreatMood(true)}>
                        <div className="text">great</div>
                    </div>
                </div>
                <div className="container">
                    <img className="image" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008436/iconfinder_9_Emoji_happy_smiley_surprised_emoticon_3129755_b1ykdv.png"/>
                    <div className="overlay" onClick={() => props.setOkayMood(true)}>
                        <div className="text">okay</div>
                    </div>
                </div>
                <div className="container">
                    <img className="image" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576009802/iconfinder_4_Emoji_exhausted_emoticon_tired_emoji_tired_face_3129749_1_kntuhd.png"/>
                    <div className="overlay" onClick={() => props.setEhhMood(true)}>
                        <div className="text">ehh..</div>
                    </div>
                </div>
                <div className="container">
                    <img className="image" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1576008442/iconfinder_11_Emoticons_smiley_laughing_face_face_smiley_laughing_tears_3129752_sinxh9.png"/>
                    <div className="overlay" onClick={() => props.setBadMood(true)}>
                        <div className="text">bad!</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Moods