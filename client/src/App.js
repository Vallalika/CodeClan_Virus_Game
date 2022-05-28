import './App.css';
import { useState, useEffect } from 'react';
import CardService from './services/CardService';
import CardList from './components/Card.js';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    CardService.getCards()
      .then(cards => setCards(cards));
  }, []);


  return (
    <div id="App">
    <CardList cards = {cards} setCards = {setCards}/>
    </div>
  );
}

export default App;
