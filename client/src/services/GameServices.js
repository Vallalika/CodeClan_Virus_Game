import Card from "../components/Card";
import PlayerHand from "../components/PlayerHand";

const baseURL = 'http://localhost:9000';

export const CardService =  {
    getCards() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

// export const refillHand = (playerOneHand, deck, setPlayerOneHand) => {
//     let randomizedHand = [] //this is where we push our 3 randomised cards
//     let deckCopy = [...deck] 

//             while(playerOneHand.length < 3){
//                 let randomIndex = Math.floor(Math.random() * deckCopy.length)
//                 let chosenCard = deckCopy[randomIndex]
//                 deckCopy.splice(randomIndex,1)
//                 randomizedHand.push(chosenCard)
                
//         }
//         setPlayerOneHand(randomizedHand)
//     }

