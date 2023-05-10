import React, { useState } from "react";

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
            <button onClick={clickedFlag1Found}>PLACEHOLDER1</button>
        </div>
    )
}

function Flag2Found() {
    const [foundFlag2, setFlag2Found] = useState(false);

    function clickedFlag2Found() {
        if (foundFlag2) {
            setFlag2Found(true);
            foundFlags++;
        }
    }

    return (
        <div>
            <button onClick={clickedFlag2Found}>PLACEHOLDER2</button>
        </div>
    )
}

function Flag3Found() {
    const [foundFlag3, setFlag3Found] = useState(false);

    function clickedFlag3Found() {
        if (foundFlag3) {
            setFlag3Found(true);
            foundFlags++;
        }
    }

    return (
        <div>
            <button onClick={clickedFlag3Found}>PLACEHOLDER3</button>
        </div>
    )
}


function Flag4Found() {
    const [foundFlag4, setFlag4Found] = useState(false);

    function clickedFlag4Found() {
        if (foundFlag4) {
            setFlag4Found(true);
            foundFlags++;
        }
    }

    return (
        <div>
            <button onClick={clickedFlag4Found}>PLACEHOLDER4</button>
        </div>
    )
}


export default Flag1Found
// export const Flag2 = Flag2Found();
// export const Flag3 = Flag3Found();
// export const Flag4 = Flag4Found();