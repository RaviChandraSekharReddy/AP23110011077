import { Request, Response } from "express";
import {
  createNotification,
  getNotifications,
  markAsRead,
  deleteNotification,
} from "../services/notificationService";

export const create = (req: Request, res: Response): void => {
  const { title, message, type } = req.body;

  const notification = createNotification(title, message, type);

  res.status(201).json(notification);
};

export const getAll = (_req: Request, res: Response): void => {
  res.json(getNotifications());
};

export const read = (req: Request, res: Response): void => {
  const id = req.params.id as string;

  const notification = markAsRead(id);

  if (!notification) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.json(notification);
};

export const remove = (req: Request, res: Response): void => {
  const id = req.params.id as string;

  const deleted = deleteNotification(id);

  if (!deleted) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.json({ message: "Deleted successfully" });
};