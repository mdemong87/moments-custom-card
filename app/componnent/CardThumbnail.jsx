import Image from "next/image";

const layers = [
  "dresses", "skin_tones", "hairs", "crowns",
  "beards", "eyes", "mouths", "noses"
];

const CardThumbnail = ({ card, onClick }) => (
  <div
    className="w-[70px] lg:w-full relative h-[90px] lg:h-[200px] rounded-lg overflow-hidden cursor-pointer"

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
        <Image
          width={1000}
          height={1000}
          key={layer}
          src={card.selectedLayers[layer]}
          alt={layer}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", }}
        />
      )
    )}
  </div>
);

export default CardThumbnail;