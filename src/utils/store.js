import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  setUser: (userState) => set(() => ({ user: userState })),
  logoutUser: () => set(() => ({ user: null })),
}));
