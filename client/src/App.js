import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import PlayerCreation from './containers/PlayerCreation';
import PlayerTurn from './containers/PlayerTurn';
import {CardService} from './services/GameServices';


function App() {

  const [playerOneName, setPlayerOneName] = useState("")
  const [playerTwoName, setPlayerTwoName] = useState("")

  const [playerOneHand, setPlayerOneHand] = useState([{
    "score":1,
    "color": "red",
    "type": "cure",
    "img_url":"./cards/red_cure.png"
    }])
  const [playerTwoHand, setPlayerTwoHand] = useState([])

  const [currentPlayer, setCurrentPlayer] = useState(1)

  const [cards, setCards] = useState([])
  const [deck, setDeck] = useState([])

  const [playerOneBoardArray, setPlayerOneBoardArray] = useState([])
  const [playerTwoBoardArray, setPlayerTwoBoardArray] = useState([{"score":0,
  "color": "red",
  "name": "heart",
  "type": "organ",
  "invulnerable": false,
  "img_url":"./cards/red_organ.png"}])

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

  const add_organ = function (selectedCard){
    if (selectedCard.type === "organ"){
    let boardCopy = [...playerOneBoardArray]
    boardCopy.push(selectedCard)
    setPlayerOneBoardArray(boardCopy)
    playerOneHand.splice(playerOneHand.indexOf(selectedCard),1)
    }

  }

  const play_virus = function(selectedCard){
    // debugger
    if(selectedCard.type === "virus"){
      
      let boardCopy = [...playerTwoBoardArray]
      for (let card of boardCopy){
        if(card.type === "organ" && card.color === selectedCard.color){
          card.score += selectedCard.score
          setPlayerTwoBoardArray(boardCopy)
        
        }
        playerOneHand.splice(playerOneHand.indexOf(selectedCard),1)

      }  
    }
    }

    const play_cure = function(selectedCard){
      // debugger
      if(selectedCard.type === "cure"){
        
        let boardCopy = [...playerTwoBoardArray]
        for (let card of boardCopy){
          if(card.color === selectedCard.color){
            card.score += selectedCard.score
            setPlayerOneBoardArray(boardCopy)
          
          }
          playerOneHand.splice(playerOneHand.indexOf(selectedCard),1)
  
        }  
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
              currentPlayer = {currentPlayer}
              playerTwoBoardArray={playerTwoBoardArray}
              onCardSelected={onCardSelected}
              onHandSelectedCard={onHandSelectedCard}
              add_organ = {add_organ}
              play_virus = {play_virus}
              play_cure = {play_cure}

              />}
            />
          </Routes>
        
        
      </Router>

      {/* <CovatarsGameContainer /> */}
    </>
  );
}

export default App;