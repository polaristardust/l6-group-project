import React, { useState } from "react";
import StartNow from './images/StartNow.png'
import CautionSign from './images/CautionSign.png'

let foundFlags = 0;

function Flag1Found(props) {
    const [foundFlag1, setFlag1Found] = useState(false);

    function clickedFlag1Found() {
        if (!foundFlag1) {
            setFlag1Found(true);
            props.onFlagFound();
            console.log("Flag 1 found");
        }
    }

    return (
        <div >
            <img src={StartNow} onClick={clickedFlag1Found} id="img-div-style" className={foundFlag1 ? 'green-background' : ''} alt="start now" width="120" height="40"/>
        </div>
    )
}

function Flag2Found(props) {
    const [foundFlag2, setFlag2Found] = useState(false);

    function clickedFlag2Found() {
        if (!foundFlag2) {
            setFlag2Found(true);
            props.onFlagFound();
            console.log("Flag 2 found");
        }
    }

    return (
        // <div>
            <span id="flag-2" onClick={clickedFlag2Found} className={foundFlag2 ? 'green-background' : ''}>{props.children}</span>
        /* </div> */
    )
}

function Flag3Found(props) {
    const [foundFlag3, setFlag3Found] = useState(false);

    function clickedFlag3Found() {
        if (!foundFlag3) {
            setFlag3Found(true);
            props.onFlagFound();
            console.log("Flag 3 found");
        }
    }

    return (
        <div>
            <img src={CautionSign} onClick={clickedFlag3Found} id="img-div-style" className={foundFlag3 ? 'green-background' : ''} alt="caution sign" width="45" height="40"/>
        </div>
    )
}


function Flag4Found(props) {
    const [foundFlag4, setFlag4Found] = useState(false);

    function clickedFlag4Found() {
        if (foundFlag4) {
            setFlag4Found(true);
            props.onFlagFound();
        }
    }

    return (
        <div>
            <button onClick={clickedFlag4Found}>PLACEHOLDER4</button>
        </div>
    )
}


// export default Flag1Found
// module.exports = {
//     Flag1: Flag1Found,
//     Flag2: Flag2Found
// }
export const Flag1 = Flag1Found;
export const Flag2 = Flag2Found;
export const Flag3 = Flag3Found;
// export const Flag4 = Flag4Found();