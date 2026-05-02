import { create } from "zustand";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
}

interface Store {
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
}

export const useNotificationStore = create<Store>((set) => ({
  notifications: [],
  setNotifications: (notifications) => set({ notifications }),
}));