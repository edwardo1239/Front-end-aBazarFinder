import { create } from "zustand";
import { ItemType } from "../types/items";

type CarritoStore = {
    items: ItemType[];
    setItems: (items: ItemType[]) => void;
    addItem: (item: ItemType) => void;
};

const useCarritoStore = create<CarritoStore>((set) => ({
    items: [],
    setItems: (items) => set({ items }),
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

export default useCarritoStore;