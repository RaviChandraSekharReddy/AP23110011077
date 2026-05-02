import { Router } from "express";
import * as controller from "../controllers/notificationController";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.put("/:id/read", controller.read);
router.delete("/:id", controller.remove);

export default router;