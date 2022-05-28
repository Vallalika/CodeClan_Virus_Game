import React from "react";
import PlayerTurn from "../components/PlayerTurn";

const Play = () => {

    return (
        <>
            <h2> Play page loading player turn components </h2>
            <PlayerTurn player="Player 1" />
            <PlayerTurn player="Player 2" />
        </>
    )
}

export default Play