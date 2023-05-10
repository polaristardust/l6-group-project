import React, { useState } from "react";
import StartNow from './images/StartNow.png'

let foundFlags = 0;

function Flag1Found(props) {
    const [foundFlag1, setFlag1Found] = useState(false);

    function clickedFlag1Found() {
        if (!foundFlag1) {
            setFlag1Found(true);
            props.onFlagFound();
        }
    }

    return (
        <div>
            <img src={StartNow} onClick={clickedFlag1Found} alt="start now" width="120" height="40"/>
        </div>
    )
}

function Flag2Found(props) {
    const [foundFlag2, setFlag2Found] = useState(false);

    function clickedFlag2Found() {
        if (!foundFlag2) {
            setFlag2Found(true);
            props.onFlagFound();
        }
    }

    return (
        <div>
            <span id="flag-2" onClick={clickedFlag2Found}>{props.children}</span>
        </div>
    )
}

function Flag3Found(props) {
    const [foundFlag3, setFlag3Found] = useState(false);

    function clickedFlag3Found() {
        if (foundFlag3) {
            setFlag3Found(true);
            props.onFlagFound();
        }
    }

    return (
        <div>
            <button onClick={clickedFlag3Found}>PLACEHOLDER3</button>
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
// export const Flag3 = Flag3Found();
// export const Flag4 = Flag4Found();