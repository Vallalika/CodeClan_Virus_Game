import Card from "../components/HandCard";
import PlayerHand from "../components/PlayerHand";

const baseURL = 'http://localhost:9000';

export const CardService =  {
    getCards() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

