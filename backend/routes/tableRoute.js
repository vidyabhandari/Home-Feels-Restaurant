import express from "express";
import { getAvailableTables } from "../controllers/tableController.js";

const router = express.Router();
router.get("/users-table", getAvailableTables);
export default router;
