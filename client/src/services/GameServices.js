import Card from "../components/Card";

const baseURL = 'http://localhost:9000';

const CardService =  {
    getCards() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

export default CardService

export const refillHand = (deck) => {
    
}
