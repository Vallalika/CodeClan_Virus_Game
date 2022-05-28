import react, { useState, useEffect } from 'react'
import PlayerCreation from './PlayerCreation'
import Play from './Play'

const CovatarsGameContainer = () => {

    return (
        <>
            <h1> Covatars Game Container </h1>
            <p>Include routes to pages in here or in app.js to render following components as different pages:</p>
            <ul>
                <li>PlayerCreation (= homepage?) </li>
                <li>PlayerTurn for Player 1</li>
                <li>PlayerTurn for Player 2</li>
                <li>......... or Play page that will alternatively show PlayerTurn for player 1 or PlayerTurn for player 2</li>
            </ul>
            
            {/* DISPLAY TESTS - ALL WORKING */}
            {/* <PlayerCreation /> */}
            {/* <Play/> */}
        </>
    )
}

export default CovatarsGameContainer