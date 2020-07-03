import React, {useState} from 'react';

function ClickZone(props) {

    if (props.value === "") {
        return <button onClick={event => {
            event.preventDefault();
            props.handler(props.id)
        }} className="pure-button" style={{height:"10%", width:"8%",textAlign: "center"}}>&nbsp;</button>
    } else {
        return (
            <button onClick={event => {
                event.preventDefault();
                props.handler(props.id)
            }} className="pure-button" style={{height:"10%", width:"8%",textAlign: "center"}}>{props.value} </button>
        )
    }
}

export default ClickZone;