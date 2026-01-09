"use client";
import ApplicationSkeleton from "@/app/componnent/ApplicationSkeleton";
import BoxContentForDeckCard from "@/app/componnent/BoxPreview/BoxContentForDeckCard";
import BoxPreview from "@/app/componnent/BoxPreview/BoxPreview";
import useDeckFinalPreview from "@/store/useDeckFinalPreview";
import CaptureScreenshort from "@/utilis/helper/CaptureScreenshort";
import getCookie from "@/utilis/helper/cookie/gettooken";
import generateUserId from "@/utilis/helper/generateUserId";
import { pdfGanarator } from "@/utilis/helper/pdfGanarator";
import MakeGet from "@/utilis/requestrespose/get";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import CardPreview from "../../../../componnent/CardPreview";
import CardSidebar from "../../../../componnent/CardSidebar";
import SideController from "../../../../componnent/SideController";
import ViewCard from "../../../../componnent/ViewCard";

const layers = [
    "dresses", "skin_tones", "hairs", "crowns",
    "beards", "eyes", "mouths", "noses"
];



/**************** Main Component Here ******************/
const ProductCustomizer = () => {


    const { slug } = useParams();
    const previewCardNodeRef = useRef(null);
    const [product, setProduct] = useState(null);
    const [cards, setCards] = useState([]);
    const [finalCards, setfinalCards] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const router = useRouter();
    const token = getCookie();
    const [spinloading, setspinloading] = useState(false);
    const [doneloading, setdoneloading] = useState(false);
    const { addToCart, clearCart } = useDeckFinalPreview();
    const [smallconOpen, setsmallconOpen] = useState(false);



    /************** Fetch product & load saved cards **************/
    useEffect(() => {
        const fetchProduct = async (slug) => {
            const res = await MakeGet(`api/shop/${slug}`);

            if (!res.success) {
                toast.error("There was a server side Problem");
                return;
            }


            setProduct(res?.data);

            const savedCards = localStorage.getItem("customCards");
            if (savedCards) {
                setCards(JSON.parse(savedCards));
                setActiveCardIndex(0);
                return;
            }

            const basebar = res?.data?.customizations?.base_cards?.[0];
            const base = basebar?.image;
            const initialLayers = {};
            layers.forEach(layer => {
                if (layer === "beards") return;
                const items = res?.data?.customizations?.[layer];
                if (items.length > 0) initialLayers[layer] = items[0]?.image;
            });

            setCards([{ baseImage: base, selectedLayers: initialLayers }]);
            setActiveCardIndex(0);
        };
        fetchProduct(slug);
    }, [slug]);


    if (!product) return <ApplicationSkeleton />;
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

    /******* Select Base Image Function ********/
    const selectBaseImage = (url) => {
        setCards(prev => prev.map((card, i) => i === activeCardIndex ? { ...card, baseImage: url } : card));
    };

    /******* Add New Card Function ********/
    const addNewCard = () => {

        const basebartwo = product?.customizations?.base_cards?.[0];
        const baseTwo = basebartwo?.image;
        const initialLayersTwo = {};
        layers.forEach(layer => {
            if (layer === "beards") return;
            const items = product?.customizations?.[layer];
            if (items.length > 0) initialLayersTwo[layer] = items[0]?.image;
        });

        setCards([...cards, { baseImage: baseTwo, selectedLayers: initialLayersTwo }]);
        setActiveCardIndex(cards.length);

    };

    /******* Removed Card Function ********/
    const removeCard = (index) => {
        setfinalCards(prev => {
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


        if (finalCards.length < 1) {
            toast.warn('Please Customize at least one card');
            return;
        }

        clearCart();
        setspinloading(true);

        const producted = {
            id: generateUserId(),
            productId: product?.id,
            productSlug: product?.slug,
            productName: product?.name,
            productType: product?.type,
            productUnitPrice: product?.offer_price > 0 ? product?.offer_price : product?.price,
            productQuantity: 1,
            productImage: product?.image,
            productGalary: product?.images,
            productDescription: product?.description,
            FinalProduct: finalCards,
            FinalPDf: await pdfGanarator(finalCards)
        };

        addToCart(producted);

        setTimeout(() => {
            setspinloading(false);
            router.push("/final/customization");
        }, 900);
    };


    const Done = async () => {
        setdoneloading(true);
        await CaptureScreenshort(previewCardNodeRef, finalCards, setfinalCards);
        setTimeout(() => {
            setdoneloading(false);
        }, [600])
    }




    return (
        <>
            <div className="grid grid-cols-12 grid-rows-12 gap-2 min-h-screen w-screen fixed bg-gray-100">
                <div className="col-span-12 row-span-2 lg:row-span-12 lg:col-span-2 w-full h-full z-50">
                    <CardSidebar
                        finalCards={finalCards} Done={Done}
                        activeIndex={activeCardIndex}
                        setActiveIndex={setActiveCardIndex}
                        addCard={addNewCard}
                        removeCard={removeCard}
                        doneloading={doneloading}
                    />
                </div>
                <div className="col-span-12 row-span-10 lg:row-span-12 lg:col-span-10 h-full w-full">
                    <div className="grid grid-cols-10 grid-rows-10 h-full w-full mt-2 lg:mt-0 relative">
                        <div className="col-span-10 row-span-9 lg:row-span-10 lg:col-span-6 flex items-center justify-center -translate-y-[150px] lg:-translate-y-[50px] w-screen lg:w-full z-40 relative">
                            <CardPreview activeCard={activeCard} previewCardNodeRef={previewCardNodeRef} />
                            <BoxPreview>
                                <BoxContentForDeckCard activeCard={activeCard} />
                            </BoxPreview>
                        </div>
                        <div className={`absolute transition-all duration-300 ${smallconOpen ? "top-px" : "top-2/4 sm:top-2/3"} lg:static lg:block col-span-10 row-span-1 lg:row-span-10 lg:col-span-4 w-screen lg:w-full h-full bg-white border-t border-gray-300 lg:border-l lg:border-gray-200 px-2 md:px-7 lg:px-6 mt-2 lg:mt-0 pb-68 lg:pb-0 shadow-2xl lg:shadow-sm rounded-t-4xl lg:rounded-none z-50`}>
                            <div className="w-full flex lg:hidden items-center justify-center">
                                <div onClick={() => { setsmallconOpen(!smallconOpen) }} className="w-fit p-2 rounded-full cursor-pointer">
                                    <div className="bg-sky-300 w-[100px] h-[10px] rounded-full flex items-center justify-center p-2">
                                        <IoIosArrowDown className={`text-white ${!smallconOpen && "rotate-180"}`} />
                                    </div>
                                </div>
                            </div>
                            <SideController product={product} activeCard={activeCard} selectBase={selectBaseImage} selectLayer={selectLayerImage} />
                            <ViewCard smallconOpen={smallconOpen} isLoading={spinloading} goToFinalView={goToFinalView} />
                        </div>
                    </div>
                </div>
                <ToastContainer position="bottom-center" />
            </div>
        </>
    );
};

export default ProductCustomizer;
