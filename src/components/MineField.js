import React, {useEffect, useState} from 'react';
import ClickZone from "./ClickZone";

const _ = require('lodash');

function MineField(props) {

    const initialState = [
        {id: 0, value: ""},
        {id: 1, value: ""},
        {id: 2, value: ""},
        {id: 3, value: ""},
        {id: 4, value: ""},
        {id: 5, value: ""},
        {id: 6, value: ""},
        {id: 7, value: ""},
        {id: 8, value: ""},
        {id: 9, value: ""}
    ]


    const [packing, setPacking] = useState(initialState)

    useEffect(() => {
        console.log("Rerendered!")
    })

    const [turn, setTurn] = useState("x")


    const clickHandle = (id) => {

        if (turn == "x") {
            setTurn("o")
        } else {
            setTurn("x")
        }

        setPacking([...packing.map(o => {
                if (o.id == id) {
                    return {id: id, value: turn}
                } else {
                    return o
                }
            })]
        )
    }


    return (
        <>
            <h1>Game time</h1>
            <div>
                {packing.slice(0, 3).map(o => <ClickZone key={o.id} id={o.id} value={o.value} handler={clickHandle}/>)}
            </div>
            <div>
                {packing.slice(4, 7).map(o => <ClickZone key={o.id} id={o.id} value={o.value} handler={clickHandle}/>)}
            </div>
            <div>
                {packing.slice(7, 11).map(o => <ClickZone key={o.id} id={o.id} value={o.value} handler={clickHandle}/>)}
            </div>
        </>
    );
}

export default MineField;