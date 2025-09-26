import { create } from "zustand";

const useProductUploadStore = create((set) => ({

    rander: 1,
    setrander: (rander) => set({ rander }),
    productType: "Simple",
    setproductType: (product) => set({ productType: product }),
    productName: "",
    setproductName: (product) => set({ productName: product }),
    productDescription: "",
    setproductDescription: (product) => set({ productDescription: product }),
    productShortDescription: "",
    setproductShortDescription: (product) => set({ productShortDescription: product }),
    productPrice: 0,
    setproductPrice: (product) => set({ productPrice: product }),
    productofferPrice: 0,
    setproductofferPrice: (product) => set({ productofferPrice: product }),
    productCategory: {},
    setproductCategory: (product) => set({ productCategory: product }),
    productTags: 0,
    setproductTags: (product) => set({ productTags: product }),
    productStatus: false,
    setproductStatus: (product) => set({ productStatus: product }),
    productThumbnail: null,
    setproductThumbnail: (product) => set({ productThumbnail: product }),
    productSingleImage: null,
    setproductSingleImage: (product) => set({ productSingleImage: product }),
    productImages: [],
    setproductImages: (product) => set({ productImages: product }),

    //customizable product layear
    layerBaseCard: null,
    setlayerBaseCard: (product) => set({ layerBaseCard: product }),
    layerSkinTone: null,
    setlayerSkinTone: (product) => set({ layerSkinTone: product }),
    layerHair: null,
    setlayerHair: (product) => set({ layerHair: product }),
    layerNose: null,
    setlayerNose: (product) => set({ layerNose: product }),
    layerEyes: null,
    setlayerEyes: (product) => set({ layerEyes: product }),
    layerMouth: null,
    setlayerMouth: (product) => set({ layerMouth: product }),
    layerDress: null,
    setlayerDress: (product) => set({ layerDress: product }),
    layerCrown: null,
    setlayerCrown: (product) => set({ layerCrown: product }),
    layerBeard: null,
    setlayerBeard: (product) => set({ layerBeard: product }),


}));

export default useProductUploadStore;
