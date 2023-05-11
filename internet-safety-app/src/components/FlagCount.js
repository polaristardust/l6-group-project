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
            <img src={StartNow} onClick={clickedFlag1Found} id="img-div-style" className={foundFlag1 ? 'green-background' : ''} alt="start now" width="120" height="50"/>
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
        if (!foundFlag4) {
            setFlag4Found(true);
            props.onFlagFound();
            console.log("Flag 4 found");
        }
    }

    return (
            <h2 style={{ display: 'inline-block', margin: '0px' }} onClick={clickedFlag4Found} className={foundFlag4 ? 'green-background' : ''}>{props.children}</h2>
    )
}

function Flag5Found(props) {
    const [foundFlag5, setFlag5Found] = useState(false);

    function clickedFlag5Found() {
        if (!foundFlag5) {
            setFlag5Found(true);
            props.onFlagFound();
            console.log("Flag 5 found");
        }
    }

    return (
        
        <p id="address-info" onClick={clickedFlag5Found} className={foundFlag5 ? 'green-background' : ''}>{props.children}</p>
    )
}

function Flag6Found(props) {
    const [foundFlag6, setFlag6Found] = useState(false);

    function clickedFlag6Found() {
        if (!foundFlag6) {
            setFlag6Found(true);
            props.onFlagFound();
            console.log("Flag 6 found");
        }
    }

    return (
            <h3 style={{ display: 'inline-block', margin: '0px' }} onClick={clickedFlag6Found} className={foundFlag6 ? 'green-background' : ''}>{props.children}</h3>
    )
}

function Flag7Found(props) {
    const [foundFlag7, setFlag7Found] = useState(false);

    function clickedFlag7Found() {
        if (!foundFlag7) {
            setFlag7Found(true);
            props.onFlagFound();
            console.log("Flag 7 found");
        }
    }

    return (
            <h3 style={{ display: 'inline-block', margin: '0px' }} onClick={clickedFlag7Found} className={foundFlag7 ? 'green-background' : ''}>{props.children}</h3>
    )
}

function Flag8Found(props) {
    const [foundFlag8, setFlag8Found] = useState(false);

    function clickedFlag8Found() {
        if (!foundFlag8) {
            setFlag8Found(true);
            props.onFlagFound();
            console.log("Flag 8 found");
        }
    }

    return (
            <h4 style={{ display: 'inline-block', margin: '0px', fontWeight: "normal" }} onClick={clickedFlag8Found} className={foundFlag8 ? 'green-background' : ''}>{props.children}</h4>
    )
}

function Flag9Found(props) {
    const [foundFlag9, setFlag9Found] = useState(false);

    function clickedFlag9Found() {
        if (!foundFlag9) {
            setFlag9Found(true);
            props.onFlagFound();
            console.log("Flag 9 found");
        }
    }

    return (
            <h4 style={{ display: 'inline-block', margin: '0px' }} onClick={clickedFlag9Found} className={foundFlag9 ? 'green-background' : ''}>{props.children}</h4>
    )
}

function Flag10Found(props) {
    const [foundFlag10, setFlag10Found] = useState(false);

    function clickedFlag10Found() {
        if (!foundFlag10) {
            setFlag10Found(true);
            props.onFlagFound();
            console.log("Flag 10 found");
        }
    }

    return (
            <h4 style={{ display: 'inline-block', margin: '0px', fontWeight: "normal" }} onClick={clickedFlag10Found} className={foundFlag10 ? 'green-background' : ''}>{props.children}</h4>
    )
}

function Flag11Found(props) {
    const [foundFlag11, setFlag11Found] = useState(false);

    function clickedFlag11Found() {
        if (!foundFlag11) {
            setFlag11Found(true);
            props.onFlagFound();
            console.log("Flag 11 found");
        }
    }

    return (
            <p style={{ display: 'inline-block', margin: '0px', fontWeight: "normal" }} onClick={clickedFlag11Found} className={foundFlag11 ? 'green-background' : ''}>{props.children}</p>
    )
}

// function CheckFlagsFound(){

//     console.log("All flags found");

//     // const [foundFlags, setFlagFound] = useState(false);

//     function FlagsFound() {
//         // if (Flag1Found && Flag2Found && Flag3Found && Flag4Found && Flag5Found && Flag6Found && Flag7Found && Flag8Found && Flag9Found && Flag10Found && Flag11Found) {
//         //     // setFlagFound(true);
//         //     console.log("All flags found");
//         // }
//     }    

//     // return(foundFlags)

    
// }

// export default Flag1Found
// module.exports = {
//     Flag1: Flag1Found,
//     Flag2: Flag2Found
// }
export const Flag1 = Flag1Found;
export const Flag2 = Flag2Found;
export const Flag3 = Flag3Found;
export const Flag4 = Flag4Found;
export const Flag5 = Flag5Found;
export const Flag6 = Flag6Found;
export const Flag7 = Flag7Found;
export const Flag8 = Flag8Found;
export const Flag9 = Flag9Found;
export const Flag10 = Flag10Found;
export const Flag11 = Flag11Found;
// export const FlagsFound = CheckFlagsFound;
