import express from "express";
import { getAvailableTables } from "../controllers/TableController.js";

const router = express.Router();
router.get("/", getAvailableTables);
export default router;
