import { Notification } from "../models/notification";
import { v4 as uuid } from "uuid";

const notifications: Notification[] = [];

export const createNotification = (
  title: string,
  message: string,
  type: Notification["type"]
): Notification => {
  const notification: Notification = {
    id: uuid(),
    title,
    message,
    type,
    read: false,
    createdAt: new Date().toISOString(),
  };

  notifications.push(notification);
  return notification;
};

export const getNotifications = (): Notification[] => notifications;

export const markAsRead = (id: string): Notification | undefined => {
  const notification = notifications.find((n) => n.id === id);
  if (notification) notification.read = true;
  return notification;
};

export const deleteNotification = (id: string): boolean => {
  const index = notifications.findIndex((n) => n.id === id);
  if (index === -1) return false;
  notifications.splice(index, 1);
  return true;
};