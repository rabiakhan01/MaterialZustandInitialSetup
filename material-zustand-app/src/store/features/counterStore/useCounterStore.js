import { create } from "zustand";
import { persist } from "zustand/middleware";
import { counterIncrementFn } from "./counterFns";

export const useCounterStore = create(
  persist(
    (set) => ({
      loading: false,
      counter: 0,

      // Increment
      increment: async (payload) => {
        const response = await counterIncrementFn(payload);
        if (response?.success) {
          set({
            loading: false,
          });
        }
      },
    }),
    {
      name: "counter",
      partialize: (state) => ({
        counter: state?.counter,
      }), // Store only counter data not the loading as well
      storage: () => localStorage, // it is by default you can also chose the session storage
    }
  )
);
