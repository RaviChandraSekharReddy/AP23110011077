import { useState } from "react";
import { api } from "../api/notificationApi";

export default function NotificationForm({ refresh }: { refresh: () => void }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/", { title, message, type });
    setTitle("");
    setMessage("");
    setType("info");
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
      <button type="submit">Add Notification</button>
    </form>
  );
}