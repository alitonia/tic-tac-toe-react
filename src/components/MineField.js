import React, {useEffect, useState} from 'react';
import ClickZone from "./ClickZone";

const _ = require('lodash');

function MineField(props) {

    const initialState =
        _.range(0, 9, 1).map(num => {
            return {id: num, value: ""}
        })


    const [packing, setPacking] = useState(initialState)

    useEffect(() => {
        setWinner(checkWinner)
    }, [packing])

    const [turn, setTurn] = useState("x")
    const [winner, setWinner] = useState("")


    const translator = (value) => {
        switch (value) {
            case "x":
                return 1
            case "o":
                return -1
            default:
                return 0
        }
    }

    const checkWinner = () => {
        // Manually code this due to lack of time
        let values = [
            [0, 1, 2].map(num => translator(packing[num].value)).reduce((a, b) => a + b),
            [3, 4, 5].map(num => translator(packing[num].value)).reduce((a, b) => a + b),
            [6, 7, 8].map(num => translator(packing[num].value)).reduce((a, b) => a + b),

            [0, 3, 6].map(num => translator(packing[num].value)).reduce((a, b) => a + b),
            [1, 4, 7].map(num => translator(packing[num].value)).reduce((a, b) => a + b),
            [2, 5, 8].map(num => translator(packing[num].value)).reduce((a, b) => a + b),

            [0, 4, 8].map(num => translator(packing[num].value)).reduce((a, b) => a + b),
            [2, 4, 6].map(num => translator(packing[num].value)).reduce((a, b) => a + b),]


        if (values.includes(3)) {
            return "x"
        } else if (values.includes(-3)) {
            return "o"
        }
        if (packing.filter(v => v.value === "").length === 0) {
            return "everyone"
        }
        return ""
    }

    const clickHandle = (id) => {

        if (winner === "") {
            if (packing[id].value === "") {
                if (turn === "x") {
                    setTurn("o")
                } else {
                    setTurn("x")
                }

                setPacking([...packing.map(o => {
                        if (o.id === id) {
                            return {id: id, value: turn}
                        } else {
                            return o
                        }
                    })]
                )
            }
        }
    }

    const reset = () => {
        setWinner("")
        setPacking(initialState)
        setTurn("x")
    }

    if (winner === "") {
        return (
            <>
                <h1 style={{marginLeft: "1%"}}>Tic tac toe</h1>
                <h4 style={{marginLeft: "1.5%"}}>Turn: {turn}</h4>
                <div className={"pure-g"} style={{marginLeft: "1%"}}>
                    {packing.slice(0, 3).map(o => <ClickZone key={o.id} id={o.id} value={o.value}
                                                             handler={clickHandle}/>)}
                </div>
                <div className={"pure-g"} style={{marginLeft: "1%"}}>
                    {packing.slice(3, 6).map(o => <ClickZone key={o.id} id={o.id} value={o.value}
                                                             handler={clickHandle}/>)}
                </div>
                <div className={"pure-g"} style={{marginLeft: "1%"}}>
                    {packing.slice(6, 9).map(o => <ClickZone key={o.id} id={o.id} value={o.value}
                                                             handler={clickHandle}/>)}
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1 style={{marginLeft: "0.5%"}}>TIC_TAC_TOE</h1>
                <h4 style={{marginLeft: "1.5%"}}>Turn: {turn}</h4>
                <div className={"pure-g"} style={{marginLeft: "1%"}}>
                    {packing.slice(0, 3).map(o => <ClickZone key={o.id} id={o.id} value={o.value}
                                                             handler={clickHandle}/>)}
                </div>
                <div className={"pure-g"} style={{marginLeft: "1%"}}>
                    {packing.slice(3, 6).map(o => <ClickZone key={o.id} id={o.id} value={o.value}
                                                             handler={clickHandle}/>)}
                </div>
                <div className={"pure-g"} style={{marginLeft: "1%"}}>
                    {packing.slice(6, 9).map(o => <ClickZone key={o.id} id={o.id} value={o.value}
                                                             handler={clickHandle}/>)}
                </div>

                <h3 style={{marginLeft: "0.5%"}}>The winner is {winner}</h3>

                <button className={"pure-button"}
                        style={{background: "#f1c5c5", marginLeft: "3%"}}
                        onClick={() => reset()}>Reset
                </button>
            </>
        );
    }

}

export default MineField;