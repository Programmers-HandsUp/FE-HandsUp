import { create } from "zustand";

interface OnboardingStoreState {
  profileImage: File | undefined;
  category: string[];
  setProfileImage: (img: File | undefined) => void;
  setCategory: (category: string[]) => void;
}

const useOnboardingStore = create<OnboardingStoreState>((set) => ({
  profileImage: undefined,
  category: [],
  setProfileImage: (img: File | undefined) => set({ profileImage: img }),
  setCategory: (category: string[]) => set({ category })
}));

export default useOnboardingStore;
