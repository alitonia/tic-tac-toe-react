import React, {useState} from 'react';

function ClickZone(props) {

    if (props.value == "") {
        return <button onClick={event => props.handler(props.id)}
                       disabled={props.value == "" ? false : true}>&nbsp;</button>
    } else {
        return (
            <button onClick={event => props.handler(props.id)}
                    disabled={props.value == "" ? false : true}>{props.value}</button>
        )
    }
}

export default ClickZone;