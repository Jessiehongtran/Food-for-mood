import React, {useState} from "react";
import Moods from "./components/Moods";
import NavBar from "./components/NavBar";
import Foods from "./components/Foods";
import FoodDetail from "./components/FoodDetail";
import {Route} from "react-router-dom";
import ImageUpload from "./components/ImageUpload"

function App(){
    const [awesomeMood, setAwesomeMood] = useState(false)
    const [greatMood, setGreatMood] = useState(false)
    const [okayMood, setOkayMood] = useState(false)
    const [ehhMood, setEhhMood] = useState(false)
    const [badMood, setBadMood] = useState(false)
    const [selectedPic, setSelectedPic] = useState("")

    console.log('awesomeMood', awesomeMood)
    console.log('greatMood', greatMood)
    console.log('okayMood', okayMood)
    console.log('ehhMood', ehhMood)
    console.log('badMood', badMood)

    

    return (
        <div>
            <Route 
                exact path="/"
                render= { props => {
                    return (
                        <>
                            <Moods
                                {...props}
                                setAwesomeMood = {setAwesomeMood}
                                setGreatMood = {setGreatMood}
                                setOkayMood = {setOkayMood}
                                setEhhMood = {setEhhMood}
                                setBadMood = {setBadMood}
                            />
                            <NavBar/>
                            
                            <Foods 
                                {...props}
                                awesomeMood = {awesomeMood}
                                greatMood = {greatMood}
                                okayMood = {okayMood}
                                ehhMood = {ehhMood}
                                badMood = {badMood}
                                setSelectedPic = {setSelectedPic}
                            />
                        </>
                    )
                }}
            />

            <Route 
                path="/foodDetail"
                render= { props => {
                    return (
                        <>
                            <NavBar/>
                            <FoodDetail 
                                {...props}
                                selectedPic = {selectedPic}
                            />

                            
                        </>
                    )
                }}
            />

            <Route 
                path="/imageUpload"
                render= {props => {
                    return (
                        <>
                            <NavBar />
                            <ImageUpload/>
                        </>
                    )
                }}
            />
            
        </div>
    )
}

export default App;