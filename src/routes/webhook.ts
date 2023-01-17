import { Router } from "express";
import { recivedMessage, verifyToken } from "../controllers/webhook";

const router = Router();

router.get("/", verifyToken);
router.post("/", recivedMessage)

export { router };