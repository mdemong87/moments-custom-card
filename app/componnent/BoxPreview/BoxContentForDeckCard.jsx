import Image from "next/image";
import boxprevew from "../../../public/boxprevew.png";


const BoxContentForDeckCard = () => {
    return (
        <div className="h-full w-full rounded-md p-2 flex items-center justify-center">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-black text-xl font-bold">Box Preview</h1>
                <Image src={boxprevew} alt="Box-preview" />
            </div>
        </div>
    );
}

export default BoxContentForDeckCard;