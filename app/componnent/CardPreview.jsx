import Image from "next/image";

const layers = [
    "dresses", "skin_tones", "hairs", "crowns",
    "beards", "eyes", "mouths", "noses"
];



const CardPreview = ({ activeCard }) => {

    console.log(activeCard);


    return (
        <div className="flex-1 items-center justify-center relative w-[270px] h-[370px] lg:w-[400px] lg:h-[750px] rounded-[12px] overflow-hidden">
            {activeCard?.baseImage && (
                <Image
                    width={1000} height={1000} src={activeCard.baseImage} alt="Base Card" className="absolute top-0 left-0 w-full h-full object-contain"
                />
            )}
            {layers.map(layer =>
                activeCard?.selectedLayers[layer] && (
                    <div key={layer}>
                        <Image
                            width={1000}
                            height={1000}
                            src={activeCard.selectedLayers[layer]}
                            alt={layer}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "55%",
                                height: "50%",
                                objectFit: "contain",
                                paddingTop: "30px"
                            }}
                        />
                        <img
                            src={activeCard.selectedLayers[layer]}
                            alt={`${layer}-mirrored`}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%) scaleY(-1)",
                                width: "55%",
                                height: "50%",
                                objectFit: "contain",
                                paddingTop: "30px"
                            }}
                        />
                    </div>
                )
            )}
        </div>
    );
}

export default CardPreview;