import React from "react";

const HandCard = ({card}) => {


    return (
        <>
            <h3 class="hand-card-details"> {card.color} {card.type} </h3>
            <img src={card["img_url"]} id="card-image" ></img>

        </>
    )
}

export default HandCard