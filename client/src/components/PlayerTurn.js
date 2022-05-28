import React from "react";
import PlayerHand from "./PlayerHand";
import PlayerBoard from "./PlayerBoard";
import Deck from "./Deck";

const PlayerTurn = ({player}) => {

    return (
        <>
            <h2> {player}'s' Turn</h2>
            <Deck />
            <PlayerHand />
            <PlayerBoard />
        </>
        
    )
}

export default PlayerTurn