import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import PlayerCreation from './containers/PlayerCreation';
import PlayerTurn from './containers/PlayerTurn';
import {CardService} from './services/GameServices';


function App() {

  const [playerOneName, setPlayerOneName] = useState("")
  const [playerTwoName, setPlayerTwoName] = useState("")

  const [playerOneHand, setPlayerOneHand] = useState([ {
    "score":1,
    "color": "red",
    "type": "cure",
    "img_url":"./cards/red_cure.png"
    },
    {
      "score":-1,
      "color": "red",
      "type": "virus",
      "img_url":"./cards/red_virus_04.png"
      }
  ])
  const [playerTwoHand, setPlayerTwoHand] = useState([])

  const [currentPlayer, setCurrentPlayer] = useState(1)

  const [cards, setCards] = useState([])
  const [deck, setDeck] = useState([])

  const [playerOneBoardArray, setPlayerOneBoardArray] = useState([{"score":0,
  "color": "red",
  "name": "heart",
  "type": "organ",
  "invulnerable": false,
  "img_url":"./cards/red_organ.png"},{"score":0,
  "color": "red",
  "name": "heart",
  "type": "organ",
  "invulnerable": false,
  "img_url":"./cards/red_organ.png"},{"score":0,
  "color": "red",
  "name": "heart",
  "type": "organ",
  "invulnerable": false,
  "img_url":"./cards/red_organ.png"}])
  const [playerTwoBoardArray, setPlayerTwoBoardArray] = useState([{"score":0,
  "color": "red",
  "name": "heart",
  "type": "organ",
  "invulnerable": false,
  "img_url":"./cards/red_organ.png"},{"score":0,
  "color": "red",
  "name": "heart",
  "type": "organ",
  "invulnerable": false,
  "img_url":"./cards/red_organ.png"},{"score":0,
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

  const onHandSelectedCard = function (playerHand){
    setHandSelectedCard(playerHand)
  }
  
  // const onCardSelected = function (PlayerBoardArray){
  //   setSelectedCard(PlayerBoardArray)
  // }

  const checkBoard = function (currentPlayer, playerOneBoardArray, playerTwoBoardArray) {
    if (currentPlayer === 1) {
      return (playerOneBoardArray)
    } else {
      return (playerTwoBoardArray)
    }
  }

  const checkHand = function (currentPlayer, playerOneHand, playerTwoHand) {
    if (currentPlayer === 1) {
      return (playerOneHand)
    } else {
      return (playerTwoHand)
    }
  }

  const checkSetPlayerBoard = function (currentPlayer, setPlayerOneBoardArray, setPlayerTwoBoardArray) {
    if (currentPlayer === 1) {
      return (setPlayerOneBoardArray)
    } else {
      return (setPlayerTwoBoardArray)
    }
  }

  const add_organ = function (selectedCard){
    
    let playerHand = checkHand(currentPlayer, playerOneHand, playerTwoHand)
    let playerBoard = checkBoard(currentPlayer, playerOneBoardArray, playerTwoBoardArray)
    let setPlayerBoard = checkSetPlayerBoard(currentPlayer, setPlayerOneBoardArray, setPlayerTwoBoardArray)
    
    if (selectedCard.type === "organ"){
        let boardCopy = [...playerBoard]
        boardCopy.push(selectedCard)
        setPlayerBoard(boardCopy)
        playerHand.splice(playerHand.indexOf(selectedCard),1)
      }
    }

  const play_virus = function(selectedCard){
    let playerHand = checkHand(currentPlayer, playerOneHand, playerTwoHand)
    // Warning guys!!! not good practice arguments are inverted
    let playerBoard = checkBoard(currentPlayer, playerTwoBoardArray, playerOneBoardArray)
    let setPlayerBoard = checkSetPlayerBoard(currentPlayer, setPlayerTwoBoardArray, setPlayerOneBoardArray)
    // console.log(playerBoard)

    if(selectedCard.type === "virus"){
      
      let boardCopy = [...playerBoard]
      for (let card of boardCopy){
        if(card.type === "organ" && card.color === selectedCard.color){
          card.score += selectedCard.score
          setPlayerBoard(boardCopy)
        
        }
        playerHand.splice(playerHand.indexOf(selectedCard),1)

      }  
    }
    }

    const play_cure = function(selectedCard){
      let playerHand = checkHand(currentPlayer, playerOneHand, playerTwoHand)
      let playerBoard = checkBoard(currentPlayer, playerOneBoardArray, playerTwoBoardArray)
      let setPlayerBoard = checkSetPlayerBoard(currentPlayer, setPlayerOneBoardArray, setPlayerTwoBoardArray)

      if(selectedCard.type === "cure"){
        
        let boardCopy = [...playerBoard]
        for (let card of boardCopy){
          if(card.color === selectedCard.color){
            card.score += selectedCard.score
            setPlayerBoard(boardCopy)
          
          }
          playerHand.splice(playerHand.indexOf(selectedCard),1)
  
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
              playerOneBoardArray={playerOneBoardArray}
              playerTwoBoardArray={playerTwoBoardArray}
              // onCardSelected={onCardSelected}
              onHandSelectedCard={onHandSelectedCard}
              add_organ = {add_organ}
              play_virus = {play_virus}
              play_cure = {play_cure}
              checkBoard = {checkBoard}
              checkHand = {checkHand}
              

              />}
            />
          </Routes>
        
        
      </Router>

      {/* <CovatarsGameContainer /> */}
    </>
  );
}

export default App;