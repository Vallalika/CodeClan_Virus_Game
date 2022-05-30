import React from "react"
import PlayerHand from "../components/PlayerHand"
import PlayerBoard from "../components/PlayerBoard"
import Deck from "../components/Deck"
import styled from 'styled-components'

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

const PlayerTurn = ({ playerOneName, playerTwoName, playerOneHand, playerTwoHand,setPlayerOneHand, setPlayerTwoHand}) => {

    return (
        <>
            <GridWrap>
                <a> Link to instructions</a>
                <ScreenTitle> {playerOneName}'s Turn</ScreenTitle>
                <Deck />
                <HandArea>
                    <PlayerHand 
                        playerOneHand={playerOneHand}
                        setPlayerOneHand={setPlayerOneHand}
                        playerTwoHand={playerTwoHand}
                        setPlayerTwoHand={setPlayerTwoHand} />
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