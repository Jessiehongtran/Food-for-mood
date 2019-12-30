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
                        <div className="ingredients">
                            <h3>Ingredients</h3>
                            <div className="ingredient-list">
                                {props.selectedPic.instruction.ingredients.map(ingre_image => 
                                    <div className="each-ingredient">
                                        <img 
                                            className = "ingredient-pic"
                                            src={ingre_image[0]}
                                        />
                                        <p className="ingredient-name">{ingre_image[1]}</p>
                                        <p className="measurement">{ingre_image[2]}</p>
                                    </div>
                            )}
                            </div>
                        </div>
                        <div className="directions">
                            <h3>Directions</h3>
                            <div className="direction-list">
                                {props.selectedPic.instruction.directions.map(direction => 
                                <dl>
                                    <dd>{direction}</dd>
                                </dl>

                                )}
                            </div>
                        </div>
                        
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default FoodDetail;