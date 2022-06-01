import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Link, Route, useNavigate} from "react-router-dom"
import PlayerCreation from './containers/PlayerCreation';
import PlayerTurn from './containers/PlayerTurn';
import {CardService} from './services/GameServices';
import WinnerPage from './components/WinnerPage';


function App() {

  const [playerOneName, setPlayerOneName] = useState("")
  const [playerTwoName, setPlayerTwoName] = useState("")

  const [playerOneHand, setPlayerOneHand] = useState([])
  const [playerTwoHand, setPlayerTwoHand] = useState([])

  const [currentPlayer, setCurrentPlayer] = useState(1)

  const [cards, setCards] = useState([])
  const [deck, setDeck] = useState([])

  const [playerOneBoardArray, setPlayerOneBoardArray] = useState([{
    "score":0,
    "color": "red",
    "name": "heart",
    "type": "organ",
    "invulnerable": false,
    "img_url":"./cards/red_organ.png"
}])
  const [playerTwoBoardArray, setPlayerTwoBoardArray] = useState([{
    "score":0,
    "color": "red",
    "name": "heart",
    "type": "organ",
    "invulnerable": false,
    "img_url":"./cards/red_organ.png"
}])

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

  const checkSetPlayerHand = function (currentPlayer, setPlayerOneHand, setPlayerTwoHand) {
    if (currentPlayer === 1) {
      return (setPlayerOneHand)
    } else {
      return (setPlayerTwoHand)
    }
  }

  const add_organ = function (selectedCard){
    
    let playerHand = checkHand(currentPlayer, playerOneHand, playerTwoHand)
    let playerBoard = checkBoard(currentPlayer, playerOneBoardArray, playerTwoBoardArray)
    let setPlayerBoard = checkSetPlayerBoard(currentPlayer, setPlayerOneBoardArray, setPlayerTwoBoardArray)
    let canplay = null

    if (playerBoard.length < 4){
      playerBoard.forEach((card) => {
        if(card.color === selectedCard.color){
          return canplay = false
        }
        else{return canplay = true}
      })
      if (selectedCard.type === "organ" && canplay === true){
        let boardCopy = [...playerBoard]
        boardCopy.push(selectedCard)
        setPlayerBoard(boardCopy)
        playerHand.splice(playerHand.indexOf(selectedCard),1)
      }
    }}
    

  const play_virus = function(selectedCard){
    let playerHand = checkHand(currentPlayer, playerOneHand, playerTwoHand)
    // Warning guys!!! not good practice arguments are inverted
    let playerBoard = checkBoard(currentPlayer, playerTwoBoardArray, playerOneBoardArray)
    let setPlayerBoard = checkSetPlayerBoard(currentPlayer, setPlayerTwoBoardArray, setPlayerOneBoardArray)

    if(selectedCard.type === "virus"){
      
      let boardCopy = [...playerBoard]
      for (let card of boardCopy){
        if(card.type === "organ" && card.color === selectedCard.color){
          card.score += selectedCard.score
          setPlayerBoard(boardCopy)
          playerHand.splice(playerHand.indexOf(selectedCard),1)

        }

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
            playerHand.splice(playerHand.indexOf(selectedCard),1)
          }
          
  
        }  
      }
      }

      const check_win = function(boardArray){
        let counter = 0
        boardArray.forEach(card => {
            if (card.score >= 0) {
            counter +=1
            }
        })
        if (counter >= 4) {
            return(true)
            
        }
    }
  

  return (
    <>
      <Router>
        {/* <navbar>
          <Link to="/">Home</Link>
          <Link to="/playerTurn">Player Turn</Link>
          <Link to="/winnerpage">Player Turn</Link>

        </navbar> */}
          
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
              refillHand={refillHand}
              currentPlayer = {currentPlayer}
              playerOneBoardArray={playerOneBoardArray}
              playerTwoBoardArray={playerTwoBoardArray}
              onHandSelectedCard={onHandSelectedCard}
              add_organ = {add_organ}
              play_virus = {play_virus}
              play_cure = {play_cure}
              checkBoard = {checkBoard}
              checkHand = {checkHand}
              setCurrentPlayer = {setCurrentPlayer}
              check_win = {check_win}
              checkSetPlayerHand = {checkSetPlayerHand}
              

              />}
            />
            <Route
              path="/winnerpage"
              element = {<WinnerPage />}>
            </Route>
          </Routes>
        
        
      </Router>

    </>
  );
}

export default App;