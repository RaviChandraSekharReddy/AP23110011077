import { api } from "../api/notificationApi";

export default function NotificationList({
  notifications,
  refresh,
}: {
  notifications: any[];
  refresh: () => void;
}) {
  const markRead = async (id: string) => {
    await api.put(`/${id}/read`);
    refresh();
  };

  const remove = async (id: string) => {
    await api.delete(`/${id}`);
    refresh();
  };

  return (
    <div>
      {notifications.map((n) => (
        <div className="notification-card" key={n.id}>
          <h3>{n.title}</h3>
          <p>{n.message}</p>
          <p>Type: {n.type}</p>
          <p className="status">{n.read ? "Read" : "Unread"}</p>

          <div className="actions">
            <button onClick={() => markRead(n.id)}>Mark Read</button>
            <button className="delete-btn" onClick={() => remove(n.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}