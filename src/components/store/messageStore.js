import { create } from "zustand";

export const useMessageStore = create((set) => ({
  show: false,
  message: "",
  setShow: (action) => set(() => ({ show: action })),
  setMessage: (action) => set(() => ({ message: action })),
}));
