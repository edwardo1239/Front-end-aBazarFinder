import { create } from "zustand";
import { ItemType } from "../types/items";

type ItemsStore = {
    items: ItemType[];
    setItems: (items: ItemType[]) => void;
    addItem: (item: ItemType) => void;
};

const useItemsStore = create<ItemsStore>((set) => ({
    items: [],
    setItems: (items) => set({ items }),
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

export default useItemsStore;