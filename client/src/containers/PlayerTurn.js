import React from "react"
import PlayerHand from "../components/PlayerHand"
import PlayerBoard from "../components/PlayerBoard"
import styled from 'styled-components'
import { refillHand } from "../services/GameServices"

const GridWrap = styled.main`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
    grid-template-columns: 1fr 3fr 3fr 1fr;

    justify-items: center;
    /* horizontal alignment within each cell */

    align-items: center;
    /* vertical alignment within each cell */
`

const ScreenTitle = styled.h2 `
    grid-column: 2 / 4;
`

const HandArea = styled.section `
    grid-column: 1 / 5;
`
const LeftBoard = styled.section `
    grid-row: 3;
    grid-column: 1 / 3;
`

const RightBoard = styled.section `
    grid-row: 3;
    grid-column: 3 / 5;
`

const PlayerTurn = ({ playerOneName, playerTwoName, playerOneHand, playerTwoHand,setPlayerOneHand, setPlayerTwoHand, deck, refillHand, currentPlayer}) => {


const onClick = () => {refillHand(playerOneHand)}

// const refillHand = (playerHand, currentDeck, setPlayerHand) => {
//     let randomizedHand = [...playerHand] //this is where we push our 3 randomised cards
//     let deckCopy = [...currentDeck] 

//             while(randomizedHand.length < 3){
//                 let randomIndex = Math.floor(Math.random() * deckCopy.length)
//                 let chosenCard = deckCopy[randomIndex]
//                 deckCopy.splice(randomIndex,1)
//                 randomizedHand.push(chosenCard)
                
//         }
//         console.log(deckCopy)
//         setPlayerHand(randomizedHand)
//     console.log("This is refillHand")
//     }

    return (
        <>
            <GridWrap>
                <a> Link to instructions</a>
                <ScreenTitle> {playerOneName}'s Turn</ScreenTitle>
                <button onClick={onClick}>Refill Hand</button>
                <HandArea>
                    <PlayerHand 
                        playerOneHand={playerOneHand}
                        setPlayerOneHand={setPlayerOneHand}
                        playerTwoHand={playerTwoHand}
                        setPlayerTwoHand={setPlayerTwoHand}
                        currentPlayer = {currentPlayer} />
                </HandArea>
                <LeftBoard>
                    <PlayerBoard />
                </LeftBoard>
                <RightBoard>
                    <PlayerBoard />
                </RightBoard>
            </GridWrap>
        </>
    )
}

export default PlayerTurn