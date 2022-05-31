import CovatarsGameContainer from './containers/CovatarsGameContainer';
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

  const [cards, setCards] = useState([])
  const [deck, setDeck] = useState([])

  const [playerOneBoardArray, setPlayerOneBoardArray] = useState([])
  const [playerTwoBoardArray, setPlayerTwoBoardArray] = useState([])

  const [selectedCard, setSelectedCard] = useState(null)
  const [handSelectedCard, setHandSelectedCard] = useState(null)


  useEffect(() => {
      CardService.getCards()
      .then(cards => setCards(cards))
      // .then(deck => setDeck(deck))
      
  }, [])

  useEffect(()=>{
    setDeck(cards)
  },[cards])

const onHandSelectedCard = function (playerOneHand){
  setHandSelectedCard(playerOneHand)
}

const onCardSelected = function (Player2BoardArray){
  setSelectedCard(Player2BoardArray)
}

const playOrgan = () => {
  let playerHand  = [...playerOneHand]
  let boardCopy = [...playerOneBoardArray]




}

const refillHand = (playerHand) => {
  let randomizedHand = [...playerHand] //this is where we push our 3 randomised cards
  let deckCopy = [...deck] 

          while(randomizedHand.length < 3){
              let randomIndex = Math.floor(Math.random() * deckCopy.length)
              let chosenCard = deckCopy[randomIndex]
              deckCopy.splice(randomIndex,1)
              randomizedHand.push(chosenCard)
              
      }
      
      setPlayerOneHand(randomizedHand)
      console.log("This is refillHand")
  }

  const check_win = (playerTwoBoardArray) => {

    let counter = 0
    for (let card in playerTwoBoardArray){
      if (card.score >= 0) {
        counter +=1
      }
    }
    if (counter >= 4) {
      const message = "Congrats you have won the game!"
      return (message)
    }

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