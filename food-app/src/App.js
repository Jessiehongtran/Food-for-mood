import React, {useState} from "react";
import Moods from "./components/Moods"
import NavBar from "./components/NavBar"
import Foods from "./components/Foods"

function App(){
    const [awesomeMood, setAwesomeMood] = useState(false)
    const [greatMood, setGreatMood] = useState(false)
    const [okayMood, setOkayMood] = useState(false)
    const [ehhMood, setEhhMood] = useState(false)
    const [badMood, setBadMood] = useState(false)

    console.log('awesomeMood', awesomeMood)
    console.log('greatMood', greatMood)
    console.log('okayMood', okayMood)
    console.log('ehhMood', ehhMood)
    console.log('badMood', badMood)


    return (
        <div>
            <Moods
                setAwesomeMood = {setAwesomeMood}
                setGreatMood = {setGreatMood}
                setOkayMood = {setOkayMood}
                setEhhMood = {setEhhMood}
                setBadMood = {setBadMood}
            />
            <NavBar/>
            <Foods 
                awesomeMood = {awesomeMood}
                greatMood = {greatMood}
                okayMood = {okayMood}
                ehhMood = {ehhMood}
                badMood = {badMood}
            />
        </div>
    )
}

export default App;