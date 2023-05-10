import './Game.css';
import { Link } from "react-router-dom";
import CautionSign from './images/CautionSign.png'
import StartNow from './images/StartNow.png'
import DropdownArrow from './images/DropdownArrow.png'
import React, { useState } from 'react';
// import Flag1Found from './FlagCount.js'
import {Flag1, Flag2, Flag3, Flag4, Flag5, Flag6, Flag7, Flag8, Flag9, Flag10, Flag11} from './FlagCount.js'
import Flag1Found from './FlagCount.js'

function Game(props) {

    // const [clicked, setClicked] = useState(Array(8).fill(false));
    const [modalVisible, setModalVisible] = useState(true);

    // function handleClick(index) {
    //     const updatedClicked = [...clicked];
    //     updatedClicked[index] = true;
    //     setClicked(updatedClicked);

    // }

    return (
        <div id="white-background">
            <div id="instructions" style={(modalVisible)?{display:"block"}:{display:"none"}}>
                <h3>Can you spot a scam?</h3>
                <p>Look at the following page and click on any red flags that could indicate a scam.</p>
                <button onClick={()=> setModalVisible(false)}>Start</button>
            </div>
            <div>
                <Flag4 onFlagFound={props.onFlagFound}>{'>>'}!! -You-have won an $90-CVS-Gift-Card</Flag4>
                <div id="address">
                    <Flag3 onFlagFound={props.onFlagFound}/>
                    <div id="address-text">
                        <div id="address-from">
                            <h5>-CVS Rewards-
                            <Flag2 onFlagFound={props.onFlagFound}>afjngbapeofkdsfn@cvs.pharmacy.us</Flag2>
                            </h5>
                            <Flag5 onFlagFound={props.onFlagFound}><u>via</u> sendgrid.net</Flag5>
                        </div>
                        <div id="address-to">
                            <p>to me</p>
                            <img id="dropdown"src={DropdownArrow} alt="drop down arrow" width="20" height="20"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="gray-background">
                <div id="inner-white">
                    <h2 style={{color: "#D30000"}}>
                        <em><b>EXCLUSIVE OFFER!</b></em>
                    </h2>
                    <div id="red-bar"></div>
                    <h3>
                        <Flag6 onFlagFound={props.onFlagFound}>Dear Pharmacy Customer</Flag6>
                        <Flag7 onFlagFound={props.onFlagFound}>,,</Flag7>
                        
                        <br/><br/>

                        <b>Congratulations!</b> You’ve been selected to <Flag10 onFlagFound={props.onFlagFound}>recieved</Flag10> an <b>EXCLUSIVE OFFER!</b><br/><br/>

                        <Flag8 onFlagFound={props.onFlagFound}>Enter your correct information</Flag8> in this short survey about your experiences with Pharmacy and receive your exclusive reward offer <em><b>(minimum value of $90)</b></em> for participating.
                    </h3>
                    <div className="center">
                        <Flag1 onFlagFound={props.onFlagFound}/>
                        <h3 className="centerText">
                            You have <b><Flag9 onFlagFound={props.onFlagFound}>4 minutes and 14 seconds</Flag9></b> to activate this offer!    
                        </h3>
                    </div>
                    <div id="red-bar"></div>
                </div>

                <p className="center">
                    This rewards program is <Flag11 onFlagFound={props.onFlagFound}>not endorsed, sponsored by, or affiliated with any merchants listed above.</Flag11><br/>
                    Registered trademarks are the property of their own respective owners.
                </p>
            </div>
        </div>
    )
}

export default Game;