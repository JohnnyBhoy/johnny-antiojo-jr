import { create } from "zustand";

export const useProjectStore = create((set) => ({
  project: "rep-searcher",
  setProject: (action) => set(() => ({ project: action })),
}));
