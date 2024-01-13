import { create } from "zustand";

interface useModalInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProjectModal = create<useModalInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
