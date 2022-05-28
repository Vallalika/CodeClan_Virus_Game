import Card from "./Card";

const CardList = ({cards, setCards}) => {
  const cardNodes = cards.map(cards => {
    return <Card 
    name={cards._id}
    type={cards}
    setCards={setCards}

  />
  });

  return (
    <section id="cards">
      <h2>Card List</h2>
      <div id = "cards-wrapper">
      {cardNodes}
      </div>
        
    </section>
  )
};

export default CardList;