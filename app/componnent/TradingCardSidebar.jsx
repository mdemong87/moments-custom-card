import { RxCross2 } from "react-icons/rx";
import AddNewCardBtn from "./AddNewCardBtn";
import TradingCardThumnail from "./TradingCardThumnail";
import TrandingAddNewCardBtn from "./TradnigAddNewBtn";



const TradingCardSidebar = ({ cards, addCard, Done, removeCard, editmood, seteidtmood, doneloading }) => {
    return (
        <div className="w-full border-b lg:border-r border-gray-200 bg-white h-full shawow-md px-2 md:px-7 lg:px-8 py-2 z-20">
            <h3 className="text-gray-700 font-semibold text-2xl pb-4 flex items-center justify-between">
                <span>Cards :</span>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-gray-500">{cards?.length}</span>
                    <div className="block lg:hidden">
                        <AddNewCardBtn addCard={addCard} Done={Done} doneloading={doneloading} />
                    </div>
                </div>
            </h3>
            <div className="w-full lg:w-full flex flex-row lg:flex-col gap-4 items-center h-[100px] lg:h-fit snap-mandatory overflow-x-scroll cursor-grab lg:overflow-y-scroll scrollbar-hide lg:max-h-[77vh] lg:min-h-[77vh]">
                {cards?.map((card, idx) => (
                    <div
                        key={idx}
                        className={`w-[70px] lg:w-full relative rounded-xl p-1 z-0 snap-start`}
                    >
                        <TradingCardThumnail
                            card={card}
                            Done={Done}
                            doneloading={doneloading}
                            onClick={() => setActiveIndex(idx)}
                        />

                        <button className="bg-sky-600 absolute top-[-3px] right-[-3px] border-3 border-white tranlate-y-full text-white rounded-full w-fit h-fit cursor-pointer flex items-center justify-center" onClick={(e) => { e.stopPropagation(); removeCard(idx); }}>
                            <RxCross2 className="text-md" />
                        </button>
                    </div>
                ))}

            </div>
            <div className="w-full bg-white py-4 hidden lg:block">
                <TrandingAddNewCardBtn addCard={addCard} Done={Done} editmood={editmood} seteidtmood={seteidtmood} doneloading={doneloading} />
            </div>
        </div>

    )
}

export default TradingCardSidebar;