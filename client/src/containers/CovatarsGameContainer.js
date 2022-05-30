import react, { useState, useEffect } from 'react'
import PlayerCreation from './PlayerCreation'
import PlayerTurn from './PlayerTurn'
import CardService from '../services/GameServices'


const CovatarsGameContainer = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        CardService.getCards()
        .then(cards => setCards(cards))
    }, [])

    return (
        <>
            {/* <h1> Covatars Game Container </h1>
            <p>Include routes to pages in here or in app.js to render following components as different pages:</p>
            <ul>
                <li>PlayerCreation (or = homepage?) </li>
                <li>PlayerTurn for Player 1</li>
                <li>PlayerTurn for Player 2</li>
            </ul> */}
            
            {/* DISPLAY TEST - ALL WORKING */}
            <PlayerCreation />
            {/* <PlayerTurn player = "Player One" /> */}
            {/* <PlayerTurn player = "Player Two" /> */}
        </>
    )
}

export default CovatarsGameContainer