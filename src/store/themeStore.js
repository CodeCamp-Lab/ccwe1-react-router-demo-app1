import { create } from "zustand";
import { persist } from "zustand/middleware";


const themeConfig = (set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
})


export const useThemeStore = create(
  persist(themeConfig, { name: "theme-storage" })
);
