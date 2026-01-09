import Image from "next/image";
import boxprevew from "../../../public/boxprevew.png";


const layers = [
    "dresses", "skin_tones", "hairs", "crowns",
    "beards", "eyes", "mouths", "noses"
];



const BoxContentForDeckCard = ({ activeCard }) => {
    return (
        <div className="h-full w-full rounded-md p-2 flex items-center justify-center">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-black text-xl font-bold">Box Preview</h1>
                <div className="relative">
                    <Image src={boxprevew} alt="Box-preview" />
                    <div className="absolute w-[60px] h-[63px] md:w-[90px] md:h-[95px] lg:w-[120px] lg:h-[115px] bottom-18 right-14.5 md:bottom-29 md:right-23 lg:bottom-36 lg:right-27">
                        {layers.map(layer =>
                            activeCard?.selectedLayers[layer] && (
                                <div key={layer}>
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={activeCard.selectedLayers[layer]}
                                        alt={layer}
                                        className="w-full h-full absolute inset-0 object-cover"
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxContentForDeckCard;