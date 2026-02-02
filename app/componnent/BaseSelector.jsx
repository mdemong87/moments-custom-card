import CardChangerTracker from "@/utilis/helper/cardChangertrancker";
import Image from "next/image";
import { useEffect } from "react";
import { GiCardAceClubs, GiCardJackClubs, GiCardJoker, GiCardKingClubs, GiCardQueenClubs } from "react-icons/gi";

const BaseSelector = ({ product, activeCard, selectBase, editedCard, seteditedCard, activebaseEditCard, setactivebaseEditCard }) => {



  useEffect(() => {
    if (!editedCard) return;

    async function check() {
      const filteredCards = await CardChangerTracker(product.customizations?.base_cards, editedCard);
      setactivebaseEditCard(filteredCards);
      selectBase(filteredCards[0]?.image);
    }

    check();

  }, [editedCard]);




  return (
    <div style={{ marginBottom: "1.5rem" }}>

      <div className="text-gray-700 pt-5">
        <h3 className="text-gray-500 text-lg pt-5 pb-2"> Only 5 Customizable Cards (Jack, Queen, King, Ace, and Joker)</h3>
        <div className="flex items-center gap-2">
          <button onClick={() => { seteditedCard("a") }} className={`rounded-xl cursor-pointer ${editedCard === 'a' ? 'border-2 border-sky-500 bg-sky-100' : 'border-2 border-gray-400 bg-gray-200'}`}><GiCardAceClubs className={`text-6xl ${editedCard === 'a' ? 'text-sky-400' : 'text-gray-400'}`} /></button>
          <button onClick={() => { seteditedCard("k") }} className={`rounded-xl cursor-pointer ${editedCard === 'k' ? 'border-2 border-sky-500 bg-sky-100' : 'border-2 border-gray-400 bg-gray-200'}`}><GiCardKingClubs className={`text-6xl ${editedCard === 'k' ? 'text-sky-400' : 'text-gray-400'}`} /></button>
          <button onClick={() => { seteditedCard("q") }} className={`rounded-xl cursor-pointer ${editedCard === 'q' ? 'border-2 border-sky-500 bg-sky-100' : 'border-2 border-gray-400 bg-gray-200'}`}><GiCardQueenClubs className={`text-6xl ${editedCard === 'q' ? 'text-sky-400' : 'text-gray-400'}`} /></button>
          <button onClick={() => { seteditedCard("j") }} className={`rounded-xl cursor-pointer ${editedCard === 'j' ? 'border-2 border-sky-500 bg-sky-100' : 'border-2 border-gray-400 bg-gray-200'}`}><GiCardJackClubs className={`text-6xl ${editedCard === 'j' ? 'text-sky-400' : 'text-gray-400'}`} /></button>
          <button onClick={() => { seteditedCard("jk") }} className={`rounded-xl cursor-pointer ${editedCard === 'jk' ? 'border-2 border-sky-500 bg-sky-100' : 'border-2 border-gray-400 bg-gray-200'}`}><GiCardJoker className={`text-6xl ${editedCard === 'jk' ? 'text-sky-400' : 'text-gray-400'}`} /></button>
        </div>
      </div>

      <h3 className="text-gray-500 text-lg pt-5 pb-2">Base Card Image</h3>

      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
        {activebaseEditCard?.map((image, idx) => {
          return (
            <Image
              width={1000}
              height={1000}
              key={idx}
              src={image?.image}
              alt={`Base ${idx + 1}`}
              className={`w-[60px] h-[80px] object-cover cursor-pointer rounded-lg p-1 ${activeCard?.baseImage === image?.image ? "border border-2 border-sky-500 bg-sky-200" : "border border-2 border-gray-300"}`}
              onClick={() => selectBase(image?.image)}
            />
          );
        })}
      </div>

    </div>
  )
};


export default BaseSelector;