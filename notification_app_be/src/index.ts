import express from "express";
import cors from "cors";
import notificationRoutes from "./routes/notificationRoutes";
import "./config/logger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notifications", notificationRoutes);

app.get("/", (_req, res) => {
  res.send("Notification Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});