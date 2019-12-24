import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './FoodDetail.scss'

const FoodDetail = (props) => {
    console.log('props in FoodDetail', props)

    return (
        <div className="foodDetail">
            <div className="foodinfo">
                <img src={props.selectedPic.image} />
                <p>{props.selectedPic.caption}</p>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Find a stop</Tab>
                        <Tab>Make it yourself</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Yummy!</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Yummy!</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default FoodDetail;