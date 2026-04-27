import { create } from "zustand";
import { persist } from "zustand/middleware";

const userConfig = (set) => ({
    user: null,
    fetchUser: async ()=> {
        const res = await fetch('https://dummyjson.com/users/1');

        const userData = await res.json()

        set({ user: userData})
    }
});

export const useUserStore = create(
    persist(userConfig, { name: "user-storage" })
);