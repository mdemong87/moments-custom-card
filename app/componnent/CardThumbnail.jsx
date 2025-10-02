import Image from "next/image";

const layers = [
  "dresses", "skin_tones", "hairs", "crowns",
  "beards", "eyes", "mouths", "noses"
];

const CardThumbnail = ({ card, onClick }) => (
  <div
    className="w-[70px] lg:w-full h-[90px] lg:h-[225px] relative h-auto rounded-lg overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    {card.baseImage && (
      <Image
        width={1000}
        height={1000}
        src={card.baseImage}
        alt="base"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
    )}
    {layers.map(layer =>
      card.selectedLayers[layer] && (
        <div key={layer}>
          <Image
            width={1000}
            height={1000}
            src={card.selectedLayers[layer]}
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
          <Image
            width={1000}
            height={1000}
            src={card.selectedLayers[layer]}
            alt={layer}
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

export default CardThumbnail;