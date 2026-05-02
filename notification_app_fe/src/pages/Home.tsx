import { useEffect } from "react";
import { api } from "../api/notificationApi";
import NotificationForm from "../components/NotificationForm";
import NotificationList from "../components/NotificationList";
import { useNotificationStore } from "../store/notificationStore";

export default function Home() {
  const { notifications, setNotifications } = useNotificationStore();

  const refresh = async () => {
    const res = await api.get("/");
    setNotifications(res.data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Notification System</h1>
        <NotificationForm refresh={refresh} />
        <NotificationList notifications={notifications} refresh={refresh} />
      </div>
    </div>
  );
}