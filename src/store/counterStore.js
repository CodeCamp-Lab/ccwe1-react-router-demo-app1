import { create } from "zustand";

export const useCounterStore = create((set, get) => ({
  count: 1,
  min: 1,
  max: 20,
  increment: () => {
    const max = get().max;
    const count = get().count;

    if (count < max) {
      set((state) => ({ count: state.count + 1 }));
    }

    if (count === max) {
        alert('เต็มแล้วจ้า');
    }
  },
  decrement: () => {
    const min = get().min;
    const count = get().count;
    //ลบไปเรื่อยๆ แต่ ห้ามน้อย min
    if (count > min) {
      set((state) => ({ count: state.count - 1 }));
    }

    if (count === min) {
        alert('ไม่ให้ลบแล้ว');
    }
  },
}));
