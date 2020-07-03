import React, {useState} from 'react';

function ClickZone(props) {

    if (props.value === "") {
        return <button onClick={event => {
            event.preventDefault();
            props.handler(props.id)
        }} className="pure-button" style={{height:"10%", width:"7%"}}>&nbsp;</button>
    } else {
        return (
            <button onClick={event => {
                event.preventDefault();
                props.handler(props.id)
            }} className="pure-button" style={{height:"10%", width:"7%"}}>{props.value} </button>
        )
    }
}

export default ClickZone;