import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './FoodDetail.scss'
import Map from './MapContainer'

const FoodDetail = (props) => {
    console.log('props in FoodDetail', props)

    return (
        <div className="foodDetail">
            <div className="foodinfo">
                <img src={props.selectedPic.image} />
                <p>{props.selectedPic.caption}</p>
            </div>
            <div className="instruction">
                <Tabs>
                    <TabList>
                        <Tab>Learn more</Tab>
                        <Tab>Find a stop</Tab>
                        <Tab>Make it yourself</Tab>
                    </TabList>

                    <TabPanel className="learn-more">
                        <h2>This food is very good</h2>
                    </TabPanel>
                    <TabPanel className="find-stop">
                    </TabPanel>
                    
                    <TabPanel className="make-yourself">
                        {props.selectedPic.instruction.ingredients.map(ingre_image => 
                            <div className="ingredient-list">
                                <img 
                                    className = "ingredient-pic"
                                    src={ingre_image[0]}
                                />
                                <p className="ingredient-name">{ingre_image[1]}</p>
                                <p className="measurement">{ingre_image[2]}</p>
                            </div>
                        )}
                        
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default FoodDetail;