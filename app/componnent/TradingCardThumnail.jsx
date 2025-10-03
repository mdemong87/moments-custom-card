import Image from "next/image";


const TradingCardThumnail = ({ card, onClick, shot }) => {

    console.log(card);


    return (
        <div
            className="w-[70px] lg:w-full h-[90px] lg:h-[190px] relative h-auto rounded-lg overflow-hidden cursor-pointer border border-gray-300 p-1"
            onClick={onClick}
        >
            <Image
                className="rounded-md"
                width={1000}
                height={1000}
                src={card}
                alt="base"
                style={{ width: "100%", height: "100%", objectFit: "container" }}
            />
        </div>
    )
};

export default TradingCardThumnail;