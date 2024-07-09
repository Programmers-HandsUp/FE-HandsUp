import { create } from "zustand";

interface OnboardingStoreState {
  category: string[];
  setCategory: (category: string[]) => void;
}

const useOnboardingStore = create<OnboardingStoreState>((set) => ({
  category: [],
  setCategory: (category: string[]) => set({ category })
}));

export default useOnboardingStore;
