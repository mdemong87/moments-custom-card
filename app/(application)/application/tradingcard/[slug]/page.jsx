"use client";
import { BackOne, FrontFour, FrontOne, FrontThree, FrontTwo } from "@/app/componnent/TextOverlayer";
import TradingCardApplicationSkelaton from "@/app/componnent/TradingCardApplicationSkelaton";
import TradingCardSidebar from "@/app/componnent/TradingCardSidebar";
import useTradingFinalPreview from "@/store/useTradingFinalPreview";
import generateUserId from "@/utilis/helper/generateUserId";
import ImageLinkMaker from "@/utilis/helper/ImageLinkMaker";
import { pdfGanarator } from "@/utilis/helper/pdfGanarator";
import MakeGet from "@/utilis/requestrespose/get";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { Rnd } from "react-rnd";
import { toast, ToastContainer } from "react-toastify";
import ViewCard from "../../../../componnent/ViewCard";

import captureNodeScreenshotForTranding from "@/utilis/helper/captureNodeScreenshotForTranding";
const fonts = ["Arial", "Poppins", "Times New Roman", "Courier New", "Comic Sans MS"];

export default function ProductCustomizer() {


    const { slug } = useParams();

    const previewCardNodeRef = useRef(null);

    // replace these with real image URLs or keep as keys and map to your assets
    const [frontImages, setfrontImages] = useState(null);
    const [backImages, setbackImages] = useState(null);

    const [baseFront, setBaseFront] = useState(null);
    const [baseBack, setBaseBack] = useState(null);
    const [uploads, setUploads] = useState([]); // {id, url, x, y, width, height}
    const [texts, setTexts] = useState([]); // {id, text, font, size, color, x, y, width}

    const [activeText, setActiveText] = useState(null);
    const [activeImage, setActiveImage] = useState(null);
    const [workingcard, setworkingcard] = useState("front");
    const [fetchingData, setfetchingData] = useState(null);
    const [fetchingDataLoading, setfetchingDataLoading] = useState(false);

    const [cards, setCards] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [editmood, seteidtmood] = useState(true);
    const [spinloading, setspinloading] = useState(false);
    const router = useRouter();
    const [doneloading, setdoneloading] = useState(false);
    const { addToCart, clearCart } = useTradingFinalPreview();




    //text state is here
    const [cardti, setcardti] = useState('Card Title');
    const [carddes, setcarddes] = useState('Card Description');
    const [name, setname] = useState('Name One');
    const [name2, setname2] = useState('Name Two');
    const [name3, setname3] = useState('Name Three');
    const [acarddate, setacarddate] = useState('CLASS OF 2025');

    const [cardfinder, setcardfinder] = useState(0);


    const getBaseTrading = useCallback(async (slug) => {
        setfetchingDataLoading(true);
        const res = await MakeGet(`api/shop/${slug}`);
        setfrontImages(res?.data?.customizations?.trading_fronts);
        setbackImages(res?.data?.customizations?.trading_backs);
        setBaseFront(ImageLinkMaker(res?.data?.customizations?.trading_fronts?.[0]?.image));
        setBaseBack(ImageLinkMaker(res?.data?.customizations?.trading_backs?.[0]?.image));
        setfetchingData(res?.data);
        setfetchingDataLoading(false);
    })



    function hanldeInputUpdater() {



        if (workingcard == 'front') {
            setcardti('Card Title');
            setcarddes('Card Description');
            setname('Name One');
            setname2('Name Two');
            setname3('Name Three');
            setacarddate('CLASS OF 2025');
        } else {
            setcardti('Profile');
            setcarddes('This Trading Card Customization is easy to customize, if your want the Try Out. You will enjoy!');
            setname('Achievements');
            setname2('Lorem Ipsum 10, This Momento card Customization One of the best Placeform');
            setname3('Awards');
            setacarddate('Lorem Ipsum 10, This Momento card Customization One of the best Placeform');

        }
    }




    useEffect(() => {
        getBaseTrading(slug);
        hanldeInputUpdater();
    }, [slug, workingcard]);







    /******** Upload Image ********/
    function handleUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        const item = {
            id: Date.now(),
            url,
            x: 20,
            y: 20,
            width: 120,
            height: 120,
        };
        setUploads((s) => [...s, item]);
        // make the newly uploaded image active
        setActiveImage(item.id);
        setActiveText(null);
    }



    /******** Helpers to update positions & sizes ********/
    function updateUploadPosition(id, x, y) {
        setUploads((prev) => prev.map((u) => (u.id === id ? { ...u, x, y } : u)));
    }
    function updateUploadSize(id, width, height) {
        setUploads((prev) => prev.map((u) => (u.id === id ? { ...u, width, height } : u)));
    }
    function updateTextPosition(id, x, y) {
        setTexts((prev) => prev.map((t) => (t.id === id ? { ...t, x, y } : t)));
    }
    function updateTextSize(id, width) {
        setTexts((prev) => prev.map((t) => (t.id === id ? { ...t, width } : t)));
    }





    // start from here

    const activeCard = cards[activeCardIndex];

    /******* Selected Layer Image Function ********/
    const selectLayerImage = (layer, url) => {
        setCards(prev =>
            prev.map((card, i) => {
                if (i !== activeCardIndex) return card;
                const updatedLayers = { ...card.selectedLayers };
                if (updatedLayers[layer] === url) delete updatedLayers[layer];
                else updatedLayers[layer] = url;
                return { ...card, selectedLayers: updatedLayers };
            })
        );
    };



    /******* Add New Card Function ********/
    const addNewCard = () => {

        const basebartwo = data?.customizations?.base_cards?.[0];
        const baseTwo = ImageLinkMaker(basebartwo?.image);
        const initialLayersTwo = {};
        layers.forEach(layer => {
            if (layer === "beards") return;
            const items = product?.customizations?.[layer];

            console.log(items);

            if (items.length > 0) initialLayersTwo[layer] = ImageLinkMaker(items[0]?.image);
        });

        setCards([...cards, { baseImage: baseTwo, selectedLayers: initialLayersTwo }]);
        setActiveCardIndex(cards.length);

    };

    /******* Removed Card Function ********/
    const removeCard = (index) => {
        setCards(prev => {
            const updated = prev.filter((_, i) => i !== index);
            let newActive = activeCardIndex;
            if (updated.length === 0) newActive = 0;
            else if (index < activeCardIndex) newActive -= 1;
            else if (index === activeCardIndex) newActive = Math.min(activeCardIndex, updated.length - 1);
            setActiveCardIndex(newActive);
            return updated;
        });
    };


    /******* Selected Layer Image Function ********/
    const goToFinalView = async () => {


        if (cards.length < 1) {
            toast.warn('Please Customize at least one card');
            return;
        }


        clearCart();
        setspinloading(true);
        const product = {
            id: generateUserId(),
            productId: fetchingData?.id,
            productSlug: fetchingData?.slug,
            productName: fetchingData?.name,
            productType: fetchingData?.type,
            productUnitPrice: fetchingData?.offer_price > 0 ? fetchingData?.offer_price : fetchingData?.price,
            productQuantity: 1,
            productImage: fetchingData?.image,
            productGalary: fetchingData?.images,
            productDescription: fetchingData?.description,
            FinalProduct: cards,
            FinalPDf: await pdfGanarator(cards)
        };


        addToCart(product);

        setTimeout(() => {
            setspinloading(false);
            router.push("/final/trading");
        }, 900);
    };
    // end from here








    const Done = async () => {
        setdoneloading(true);

        await captureNodeScreenshotForTranding(previewCardNodeRef.current, cards, setCards);
        setTimeout(() => {
            setdoneloading(false);
        }, [600])
    }




    if (fetchingDataLoading) return <TradingCardApplicationSkelaton />



    return (
        <div className="grid grid-cols-12 grid-rows-12 gap-0 lg:gap-2 h-screen w-screen fixed bg-gray-100">
            {/* Left Sidebar (kept simple as in your last snippet) */}
            <div className="col-span-12 row-span-2 lg:row-span-12 lg:col-span-2 w-full h-full bg-white">
                {/* replace this with <CardSidebar /> when available */}
                <div className="w-full h-full">

                    <TradingCardSidebar cards={cards} addCard={addNewCard} Done={Done} removeCard={removeCard} editmood={editmood} seteidtmood={seteidtmood} doneloading={doneloading} />

                </div>
            </div>

            {/* Middle area (contains canvas and right-panel inside it like your original layout) */}
            <div className="col-span-12 row-span-10 lg:row-span-12 lg:col-span-10 h-full lg:h-screen w-full">
                <div className="grid grid-cols-10 grid-rows-10 h-full w-full mt-2 lg:mt-0">
                    {/* Canvas column (middle) */}
                    <div className="col-span-10 row-span-4 lg:row-span-10 lg:col-span-6 flex items-center justify-center lg:-translate-y-[50px] w-screen lg:w-full h-full lg:h-full">
                        <div ref={previewCardNodeRef} className="border border-gray-200 rounded-md bg-white w-[140px] md:w-[190px] lg:w-[390px] h-[200px] md:h-[300px] lg:h-[570px] relative overflow-hidden">
                            {/* Uploaded images (zIndex:1) - draggable & resizable */}
                            {uploads.map((img) => (
                                <Rnd

                                    resizeHandleStyles={{
                                        topLeft: { border: "3px solid #3b82f6", width: "10px", height: "10px", background: "white" },
                                        topRight: { border: "3px solid #3b82f6", width: "10px", height: "10px", background: "white" },
                                        bottomLeft: { border: "3px solid #3b82f6", width: "10px", height: "10px", background: "white" },
                                        bottomRight: { border: "3px solid #3b82f6", width: "10px", height: "10px", background: "white" },
                                    }}
                                    style={{
                                        border: activeText === img.id || activeImage === img?.id ? "2px dashed #3b82f6" : "none",
                                        borderRadius: "4px",
                                    }}


                                    key={img.id}
                                    bounds="parent"
                                    size={{ width: img.width, height: img.height }}
                                    position={{ x: img.x, y: img.y }}
                                    onDragStop={(_, d) => updateUploadPosition(img.id, d.x, d.y)}
                                    onResizeStop={(_, __, ref, ___, pos) => {
                                        updateUploadSize(img.id, parseInt(ref.style.width, 10), parseInt(ref.style.height, 10));
                                        updateUploadPosition(img.id, pos.x, pos.y);
                                    }}
                                    onMouseDown={() => {
                                        setActiveImage(img.id);
                                        setActiveText(null);
                                    }}
                                    style={{ zIndex: 1 }}
                                >
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={img.url}
                                        alt="upload"
                                        className="w-full h-full object-contain rounded"
                                        draggable={false}
                                    />
                                </Rnd>
                            ))}

                            {/* Front base (zIndex:2) */}
                            {baseFront && workingcard === "front" && (
                                <Image
                                    src={baseFront}
                                    width={1000}
                                    height={1000}
                                    alt="front-base"
                                    className="absolute inset-0 object-cover w-full h-full"
                                    style={{ zIndex: 2, pointerEvents: "none" }}
                                />
                            )}

                            {/* Back base (zIndex:2) */}
                            {baseBack && workingcard === "back" && (
                                <Image
                                    src={baseBack}
                                    height={1000}
                                    width={1000}
                                    alt="back-base"
                                    className="absolute inset-0 object-cover w-full h-full"
                                    style={{ zIndex: 2, pointerEvents: "none" }}
                                />
                            )}

                            {/* Text layers (zIndex:4) */}


                            {/* ......................................................

...........................................................*/


                                <div className="absolute top-0 left-0 w-full h-screen z-50 pointer-events-none">

                                    {
                                        workingcard === "front" ? (
                                            <>
                                                {cardfinder == 0 && <FrontOne cardti={cardti} carddes={carddes} name={name} name2={name2} name3={name3} acarddate={acarddate} />}
                                                {cardfinder == 1 && <FrontTwo cardti={cardti} carddes={carddes} name={name} name2={name2} name3={name3} acarddate={acarddate} />}
                                                {cardfinder == 2 && <FrontThree cardti={cardti} carddes={carddes} name={name} name2={name2} name3={name3} acarddate={acarddate} />}
                                                {cardfinder == 3 && <FrontFour cardti={cardti} carddes={carddes} name={name} name2={name2} name3={name3} acarddate={acarddate} />}
                                            </>
                                        ) : (
                                            <BackOne cardti={cardti} carddes={carddes} name={name} name2={name2} name3={name3} acarddate={acarddate} />
                                        )
                                    }

                                </div>




/*......................................................................


..................................................................................... */}



                            {/* Text layers (zIndex:4) */}



                            {/* small helper overlay when nothing selected */}
                            {!uploads.length && !baseFront && !baseBack && !texts.length && (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300">Preview area</div>
                            )}
                        </div>
                    </div>

                    {/* Right Controls column (inside the middle wrapper as your original) */}
                    <div className="col-span-10 row-span-6 lg:row-span-10 lg:col-span-4 w-screen lg:w-full h-full bg-white border-t lg:border-l border-gray-200 px-2 md:px-6 lg:px-6 mt-2 lg:mt-0">
                        <div className="h-full lg:h-[83vh] overflow-y-scroll mt-2 space-y-4">

                            <div className="flex items-center justify-center gap-4 bg-gray-100 rounded-md p-4 mt-4 mb-4">
                                <button onClick={() => { setworkingcard('front'); hanldeInputUpdater() }} className={`text-lg text-semibold text-white flex items-center gap-2 px-2 py-2 rounded-md w-full justify-center cursor-pointer ${workingcard === "front" ? "bg-sky-400" : "bg-gray-400"}`}>
                                    <BsCreditCard2Back className="text-xl" />
                                    <span>Front Side</span>
                                </button>
                                <button onClick={() => { setworkingcard('back'); hanldeInputUpdater() }} className={`text-lg text-semibold text-white flex items-center gap-2 px-2 py-2 rounded-md w-full justify-center cursor-pointer ${workingcard === "back" ? "bg-sky-400" : "bg-gray-400"}`}>
                                    <BsCreditCard2Back className="text-xl" />
                                    <span>Back Side</span>
                                </button>
                            </div>



                            {/* Front Base Card */}
                            {
                                workingcard === "front" && <div>
                                    <label className="block text-gray-700 mb-1">Front Base Card *</label>
                                    <div className="flex flex-wrap gap-2">
                                        {frontImages?.map((img, idx) => (
                                            <Image
                                                key={idx}
                                                src={ImageLinkMaker(img?.image)}
                                                width={1000}
                                                height={1000}
                                                alt={`front-${idx}`}
                                                onClick={() => { setBaseFront(ImageLinkMaker(img?.image)); setcardfinder(idx); hanldeInputUpdater() }}
                                                className={`w-16 h-20 cursor-pointer rounded ${baseFront === ImageLinkMaker(img?.image) ? "border-5 p-1 border-sky-400" : "border-2 border-gray-200"}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                            }




                            {/* Back Base Card */}
                            {
                                workingcard === "back" && <div>
                                    <label className="block text-gray-700 mb-1">Back Base Card *</label>
                                    <div className="flex flex-wrap gap-2">
                                        {backImages?.map((img, idx) => (
                                            <Image
                                                key={idx}
                                                src={ImageLinkMaker(img?.image)}
                                                width={1000}
                                                height={1000}
                                                alt={`back-${idx}`}
                                                onClick={() => setBaseBack(ImageLinkMaker(img?.image))}
                                                className={`w-16 h-20 cursor-pointer rounded ${baseBack === ImageLinkMaker(img?.image) ? "border-5 p-1 border-sky-400" : "border-2 border-gray-200"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            }

                            {/* Upload Image */}
                            <div className="my-6">
                                <label className="block text-gray-700 mb-1">Upload Image * <span className="text-gray-500 bg-yellow-200 px-1.5 rounded-md text-xs">900 x 1300</span></label>
                                <div className="flex gap-2 items-center">
                                    <label className="" htmlFor="uploadImage">
                                        <div className=" w-[80px] h-[80px] lg:w-[80px] lg:h-[80px] bg-gray-100 rounded-md flex items-center justify-center cursor-pointer">
                                            <CiCirclePlus className="text-6xl text-gray-300" />
                                        </div>

                                    </label>
                                    {activeImage && (
                                        <div className="space-y-2 text-gray-700">
                                            <div className="text-sm font-medium">Image selected</div>
                                            <div className="text-sm">You can drag / resize directly on canvas</div>
                                        </div>
                                    )}
                                    <input onChange={handleUpload} id="uploadImage" type="file" className="hidden" accept="image/*" />
                                </div>
                            </div>



                            {/* text control start here */}

                            {/* Add Text */}
                            <div>
                                <div className="">
                                    <label className="block text-gray-700 mb-1">Edit Text *</label>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <label className="text-gray-500 mb-1 text-sm">Card Title: *</label>
                                            <input value={cardti} onChange={(e) => { setcardti(e.target.value) }} type="text" className="border border-gray-300 p-1 rounded-md text-gray-600 outline-none w-full" />
                                        </div>
                                        <div>
                                            <label className="text-gray-500 mb-1 text-sm">Card Descriptions: *</label>
                                            <input value={carddes} onChange={(e) => { setcarddes(e.target.value) }} type="text" className="border border-gray-300 p-1 rounded-md text-gray-600 outline-none  w-full" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 my-3">
                                        <div>
                                            <label className="text-gray-500 mb-1 text-sm">Name One: *</label>
                                            <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" className="border border-gray-300 p-1 rounded-md text-gray-600 outline-none  w-full" />
                                        </div>
                                        <div>
                                            <label className="text-gray-500 mb-1 text-sm">Name Two: *</label>
                                            <input value={name2} onChange={(e) => { setname2(e.target.value) }} type="text" className="border border-gray-300 p-1 rounded-md text-gray-600 outline-none  w-full" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 my-3">
                                        <div>
                                            <label className="text-gray-500 mb-1 text-sm">Name Three: *</label>
                                            <input value={name3} onChange={(e) => { setname3(e.target.value) }} type="text" className="border border-gray-300 p-1 rounded-md text-gray-600 outline-none  w-full" />
                                        </div>
                                        <div className="">
                                            <label className="text-gray-500 mb-1 text-sm">About Card Date: *</label>
                                            <input value={acarddate} onChange={(e) => { setacarddate(e.target.value) }} type="text" className="border border-gray-300 p-1 rounded-md text-gray-600 outline-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* text control end here */}


                        </div>

                        {/* Bottom Button */}
                        <ViewCard isLoading={spinloading} goToFinalView={goToFinalView} />
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    );
}

