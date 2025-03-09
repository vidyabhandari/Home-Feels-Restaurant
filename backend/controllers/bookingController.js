import BookingModel from "../models/BookingModel.js";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Config variables
const frontend_URL = 'http://localhost:5174';

// Place a table booking
const bookTable = async (req, res) => {
    try {
        const { date, time, people, tableId, userId } = req.body;
        const bookingFee = 100; // Example fee for booking
        const amountInPaise = bookingFee * 100;

        const newBooking = new BookingModel({ userId, date, time, people, tableId, paymentGateway: "razorpay" });
        await newBooking.save();

        const order = await razorpay.orders.create({
            amount: amountInPaise,
            currency: "INR",
            receipt: `booking_${newBooking._id}`,
        });

        res.json({
            success: true,
            order,
            bookingId: newBooking._id,
            key_id: process.env.RAZORPAY_KEY_ID,
            amountInRupees: bookingFee,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Verify Razorpay payment
const verifyBookingPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (generatedSignature === razorpay_signature) {
            await BookingModel.findByIdAndUpdate(bookingId, { payment: true });
            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            res.json({ success: false, message: "Payment verification failed" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error verifying payment" });
    }
};

// List bookings for admin
const listBookings = async (req, res) => {
    try {
        const bookings = await BookingModel.find({});
        res.json({ success: true, data: bookings });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching bookings" });
    }
};

// Fetch user's bookings
const userBookings = async (req, res) => {
    try {
        const bookings = await BookingModel.find({ userId: req.body.userId });
        res.json({ success: true, data: bookings });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching user bookings" });
    }
};

// Update booking status
const updateBookingStatus = async (req, res) => {
    try {
        await BookingModel.findByIdAndUpdate(req.body.bookingId, { status: req.body.status });
        res.json({ success: true, message: "Booking status updated" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating status" });
    }
};

// Verify booking after payment
const verifyBooking = async (req, res) => {
    const { bookingId, success } = req.body;
    try {
        if (success === "true") {
            await BookingModel.findByIdAndUpdate(bookingId, { payment: true });
            res.json({ success: true, message: "Booking confirmed" });
        } else {
            await BookingModel.findByIdAndDelete(bookingId);
            res.json({ success: false, message: "Booking not paid" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error verifying booking" });
    }
};

export { bookTable, verifyBookingPayment, listBookings, userBookings, updateBookingStatus, verifyBooking };
