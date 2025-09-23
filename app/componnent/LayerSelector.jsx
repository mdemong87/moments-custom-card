import Image from "next/image";

const layers = [
  "dresses", "heads", "hairstyles", "crowns",
  "beards", "eyes", "mouths", "noses"
];

const LayerSelector = ({ product, activeCard, selectLayer }) => (
  <div>
    {layers.map(layer => (
      <div key={layer} style={{ marginBottom: "1.5rem" }}>
        <h3 className="text-gray-500 text-lg pt-5 pb-2" style={{ textTransform: "capitalize" }}>
          {layer === "heads" ? "Skin Tone" : layer.replace("_", " ")}
        </h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {(product.acf?.[layer] || []).map((image, idx) => {
            const url = image.url || image;
            const isSelected = activeCard?.selectedLayers[layer] === url;
            return (
              <Image
                width={1000}
                height={1000}
                key={idx}
                src={url}
                alt={`${layer} ${idx + 1}`}
                className={`w-[60px] h-[80px] aspect-[4/3] object-cover cursor-pointer rounded-lg p-1 ${isSelected ? "border border-2 border-sky-500 bg-sky-200" : "border border-2 border-gray-300"}`}
                onClick={() => selectLayer(layer, url)}
              />
            );
          })}
        </div>
      </div>
    ))}
  </div>
);


export default LayerSelector;