import React, {useState} from 'react';

function ClickZone(props) {

    if (props.value === "") {
        return <button onClick={event => {
            event.preventDefault();
            props.handler(props.id)
        }} className="pure-button" style={{display: "inline-block"}}>&nbsp;&nbsp;</button>
    } else {
        return (
            <button onClick={event => {
                event.preventDefault();
                props.handler(props.id)
            }} className="pure-button" style={{display: "inline-block"}}>{props.value}</button>
        )
    }
}

export default ClickZone;