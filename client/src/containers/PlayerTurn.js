import React from "react";
import PlayerHand from "../components/PlayerHand";
import PlayerBoard from "../components/PlayerBoard";
import Deck from "../components/Deck";

const PlayerTurn = ({player}) => {

    return (
        <>
            <h2> {player}'s Turn</h2>
            <Deck />
            <PlayerHand />
            <PlayerBoard />
        </>
        
    )
}

export default PlayerTurn