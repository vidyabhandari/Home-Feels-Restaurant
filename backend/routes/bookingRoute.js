import express from "express";
import { bookTable, verifyBookingPayment, listBookings, userBookings, updateBookingStatus, verifyBooking } from "../controllers/BookingController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/book-table", authMiddleware, bookTable);
router.post("/verify-payment", verifyBookingPayment);
router.get("/list", listBookings);
router.post("/user-bookings",authMiddleware, userBookings);
router.post("/update-status", updateBookingStatus);
router.post("/verify-booking", verifyBooking);

export default router;
