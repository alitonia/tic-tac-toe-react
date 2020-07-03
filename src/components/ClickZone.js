import React, {useState} from 'react';

function ClickZone(props) {

    if (props.value === "") {
        return <button onClick={event => {
            event.preventDefault();
            props.handler(props.id)
        }} className="pure-button"
                       style={{
                           paddingLeft: "15px", height: "40px", width: "45px", textAlign: "left"
                       }}>&nbsp;</button>
    } else {
        return (
            <button onClick={event => {
                event.preventDefault();
                props.handler(props.id)
            }} className="pure-button"
                    style={{
                        paddingLeft: "15px", height: "40px", width: "45px", textAlign: "left"
                    }}>{props.value} </button>
        )
    }
}

export default ClickZone;