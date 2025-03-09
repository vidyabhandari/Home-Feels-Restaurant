import express from "express";
import { getAvailableTables } from "../controllers/tableController.js";

const router = express.Router();
router.get("/", getAvailableTables);
export default router;
