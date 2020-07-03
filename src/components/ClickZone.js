import React, {useState} from 'react';

function ClickZone(props) {

    if (props.value === "") {
        return <button onClick={event => {
            event.preventDefault();
            props.handler(props.id)
        }} className="pure-button" style={{height:"40px", width:"45px",textAlign: "center"}}>&nbsp;</button>
    } else {
        return (
            <button onClick={event => {
                event.preventDefault();
                props.handler(props.id)
            }} className="pure-button" style={{height:"40px", width:"45px",textAlign: "center"}}>{props.value} </button>
        )
    }
}

export default ClickZone;