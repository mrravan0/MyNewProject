import { create } from "zustand";

export const useSliderTrigger = create((set) => ({
  isOpen: false,
  handleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useSliderData = create((set) => ({
  data: {},
  setData: (data) => set({ data }),
}));

// export const useCarListModal = create((set) => ({
//   startDate: null,
//   endDate: null,
//   isOpen: false,
//   handleOpen: (open) => set((state) => ({ isOpen: open || !state.isOpen })),
//   setDate: (startDate, endDate) => set({ startDate, endDate }),
// }));
