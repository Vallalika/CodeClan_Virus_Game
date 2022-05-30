import CovatarsGameContainer from './containers/CovatarsGameContainer';
import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import PlayerCreation from './containers/PlayerCreation';
import PlayerTurn from './containers/PlayerTurn';
import CardService from './services/GameServices';


function App() {

  const [playerOneName, setPlayerOneName] = useState("")
  const [playerTwoName, setPlayerTwoName] = useState("")

  const [playerOneHand, setPlayerOneHand] = useState([])
  const [playerTwoHand, setPlayerTwoHand] = useState([])

  const [cards, setCards] = useState([])

  useEffect(() => {
      CardService.getCards()
      .then(cards => setCards(cards))
  }, [])

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
              />}
            />
          </Routes>
        
        
      </Router>
      {/* <CovatarsGameContainer /> */}
    </>
  );
}

export default App;