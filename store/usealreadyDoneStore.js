import { create } from "zustand";

const usealreadyDoneStore = create((set) => ({
    alreadyDone: [],
    setalreadyDone: (done) => set({ alreadyDone: done }),
}));

export default usealreadyDoneStore;
