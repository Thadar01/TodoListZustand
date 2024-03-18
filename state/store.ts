import { create } from "zustand";
import { dataType } from "./type";
import { states } from "./slice";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create<dataType>()(
  persist(
    immer((set) => ({
      ...states(set),
    })),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
