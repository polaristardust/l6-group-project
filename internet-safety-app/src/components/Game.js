import './Game.css';
import { Link } from "react-router-dom";

function Game() {
 
    return (
        
        <div>
            <div>
                <h1>{'>>'}!! -You-have won an $90-CVS-Gift-Card</h1>
                <div>
                    <img src="./images/cautionSign.png"/>
                    <h5>-CVS Rewards- afjngbapeofkdsfn@cvs.pharmacy.us via sendgrid.net</h5>
                    <h6>to me</h6>
                </div>
            </div>
            <div id="gray-background">
                <div id="inner-gray">
                    <h1 style={{color: "red"}}>
                        <b>EXCLUSIVE OFFER!</b>
                    </h1>
                    <div id="red-bar"></div>
                    <h3>
                        Dear Pharmacy Customer,,<br/><br/>

                        <b>Congratulations!</b> You’ve been selected to recieved an <b>EXCLUSIVE OFFER!</b><br/><br/>

                        Enter your correct information in this short survey about your experiences with Pharmacy and receive your exclusive reward offer (<b>minimum value of $90</b>) for participating.
                    </h3>
                    <img className="centerImage" src="./images/startNow.jpg"/>
                    <h3 className="centerText">
                        You have <b>4 minutes and 14 seconds</b> to activate this offer!    
                    </h3>
                    <div id="red-bar"></div>
                </div>

                <h5 className="centerText">
                    This rewards program is not endorsed, sponsored by, or affiliated with any merchants listed above.<br/>
                    Registered trademarks are the property of their own respective owners.
                </h5>
            </div>
        </div>
    )
}

export default Game;