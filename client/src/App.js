import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import PlayerCreation from './containers/PlayerCreation';
import PlayerTurn from './containers/PlayerTurn';
import {CardService} from './services/GameServices';


function App() {

  const [playerOneName, setPlayerOneName] = useState("")
  const [playerTwoName, setPlayerTwoName] = useState("")

  const [playerOneHand, setPlayerOneHand] = useState([])
  const [playerTwoHand, setPlayerTwoHand] = useState([])

  const [currentPlayer, setCurrentPlayer] = useState(1)

  const [cards, setCards] = useState([])
  const [deck, setDeck] = useState([])

  const [playerOneBoardArray, setPlayerOneBoardArray] = useState([])
  const [playerTwoBoardArray, setPlayerTwoBoardArray] = useState([])

  const [selectedCard, setSelectedCard] = useState(null)
  const [handSelectedCard, setHandSelectedCard] = useState(null)


  useEffect(() => {
      CardService.getCards()
      .then(cards => setCards(cards))
      
  }, [])

  useEffect(()=>{
    setDeck(cards)
  },[cards])

  const refillHand = (playerHand) => {
    let randomizedHand = [...playerHand] //this is where we push our 3 randomised cards
    let deckCopy = [...deck]

    while(randomizedHand.length < 3){
        let randomIndex = Math.floor(Math.random() * deckCopy.length)
        let chosenCard = deckCopy[randomIndex]
        deckCopy.splice(randomIndex,1)
        randomizedHand.push(chosenCard)
    
      }
    if (currentPlayer === 1) {
      setPlayerOneHand(randomizedHand)
    } else {
      setPlayerTwoHand(randomizedHand)
    }
  }

  const onHandSelectedCard = function (playerOneHand){
    setHandSelectedCard(playerOneHand)
  }
  
  const onCardSelected = function (Player2BoardArray){
    setSelectedCard(Player2BoardArray)
  }

  return (
    <>
      <Router>
        <navbar>
          <Link to="/">Home</Link>
          <Link to="/playerTurn">Player Turn</Link>
        </navbar>
          
          <Routes>
            <Route 
              path="/" 
              element={<PlayerCreation 
              setPlayerOneName={setPlayerOneName} 
              setPlayerTwoName={setPlayerTwoName} />}
            /> 
            <Route 
              path="/playerTurn" 
              element={<PlayerTurn playerOneName={playerOneName} 
              playerTwoName={playerTwoName}
              playerOneHand={playerOneHand}
              setPlayerOneHand={setPlayerOneHand}
              playerTwoHand={playerTwoHand}
              setPlayerTwoHand={setPlayerTwoHand}
              deck={deck}
              refillHand={refillHand}
              currentPlayer = {currentPlayer}
              playerTwoBoardArray={playerTwoBoardArray}
              onCardSelected={onCardSelected}
              onHandSelectedCard={onHandSelectedCard}

              />}
            />
          </Routes>
        
        
      </Router>

      {/* <CovatarsGameContainer /> */}
    </>
  );
}

export default App;