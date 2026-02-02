const CardChangerTracker = async (allcard, editedCard) => {


    console.log(allcard);


    const filteredCards = allcard?.filter((card) => {



        if (editedCard === "a") {
            if (card?.name === "Base_cards 1" || card?.name === "Base_cards 5" || card?.name === "Base_cards 9" || card?.name === "Base_cards 13") return card;
        } else if (editedCard === "k") {
            if (card?.name === "Base_cards 3" || card?.name === "Base_cards 7" || card?.name === "Base_cards 11" || card?.name === "Base_cards 15") return card;
        } else if (editedCard === "q") {
            if (card?.name === "Base_cards 4" || card?.name === "Base_cards 8" || card?.name === "Base_cards 12" || card?.name === "Base_cards 16") return card;
        } else if (editedCard === "j") {
            if (card?.name === "Base_cards 2" || card?.name === "Base_cards 6" || card?.name === "Base_cards 10" || card?.name === "Base_cards 14") return card;
        } else if (editedCard === "jk") {
            if (card?.name === "Base_cards 2" || card?.name === "Base_cards 6" || card?.name === "Base_cards 10" || card?.name === "Base_cards 14") return card;
        }

    })

    return filteredCards;
}


export default CardChangerTracker;