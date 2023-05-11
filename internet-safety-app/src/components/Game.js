import './Game.css';
import { Link } from "react-router-dom";
import CautionSign from './images/CautionSign.png'
import StartNow from './images/StartNow.png'
import DropdownArrow from './images/DropdownArrow.png'
// import Flag1Found from './FlagCount.js'
import React, { useState } from 'react';
// // import Flag1Found from './FlagCount.js'
import {Flag1, Flag2, Flag3} from './FlagCount.js'
import Flag1Found from './FlagCount.js'

function Game(props) {

    const [clicked, setClicked] = useState(Array(8).fill(false));
    const [modalVisible, setModalVisible] = useState(true);

    function handleClick(index) {
        const updatedClicked = [...clicked];
        updatedClicked[index] = true;
        setClicked(updatedClicked);

    }

    return (
        <div id="game-screen">
            <div id="overlay" style={(modalVisible)?{display:"block"}:{display:"none"}}>
                <div id="instructions">
                    <h2><b>Can you spot a scam?</b></h2>
                    <p id="instructions-p">Look at the following page and click on any red flags that could indicate a scam.</p>
                    <div id="start">
                        <h2><b>Let's get started</b></h2>
                        <button id="arrow" onClick={()=> setModalVisible(false)}>➜</button>
                    </div>
                </div>
            </div>
            <div id="white-background">
                <div>
                    <h2 id="subject" onClick={() => handleClick(0)} className={clicked[0] ? 'green-background' : ''}>{'>>'}!! -You-have won an $90-CVS-Gift-Card</h2>
                    <div id="address">
                        <Flag3 onFlagFound={props.onFlagFound}/>
                        <div id="address-text">
                            <div id="address-from">
                                <h5>-CVS Rewards-
                                <Flag2 onFlagFound={props.onFlagFound}>afjngbapeofkdsfn@cvs.pharmacy.us</Flag2>
                                </h5>
                                <p id="address-info"><u>via</u> sendgrid.net</p>
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
                            Dear Pharmacy Customer,,<br/><br/>

                            <b>Congratulations!</b> You’ve been selected to recieved an <b>EXCLUSIVE OFFER!</b><br/><br/>

                            Enter your correct information in this short survey about your experiences with Pharmacy and receive your exclusive reward offer <em><b>(minimum value of $90)</b></em> for participating.
                        </h3>
                        <div className="center">
                            <Flag1 onFlagFound={props.onFlagFound}/>
                            <h3 className="centerText">
                                You have <b>4 minutes and 14 seconds</b> to activate this offer!    
                            </h3>
                        </div>
                        <div id="red-bar"></div>
                    </div>

                    <p className="center">
                        This rewards program is not endorsed, sponsored by, or affiliated with any merchants listed above.<br/>
                        Registered trademarks are the property of their own respective owners.
                    </p>
                </div>
            </div>
        </div>
            
    )
}

export default Game;