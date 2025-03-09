import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";


dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// config variables
const deliveryCharge = 50;
const frontend_URL = 'http://localhost:5174';

// Placing User Order for Frontend
const placeOrder = async (req, res) => {
    try {
        const { amount, items, address, userId } = req.body;
        const totalAmount = amount + deliveryCharge;
        const amountInPaise = Math.round(totalAmount * 100);

        const newOrder = new orderModel({ userId, items, amount: totalAmount, address, paymentGateway: "razorpay" });
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        const order = await razorpay.orders.create({
            amount: amountInPaise,
            currency: "INR",
            receipt: `order_${newOrder._id}`,
        });

        res.json({
            success: true,
            order,
            orderId: newOrder._id,
            key_id: process.env.RAZORPAY_KEY_ID,
            amountInRupees: totalAmount,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
// Verify Razorpay payment
const verifyRazorpayPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (generatedSignature === razorpay_signature) {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            res.json({ success: false, message: "Payment verification failed" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error verifying payment" });
    }
};

// Listing Order for Admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// User Orders for Frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const updateStatus = async (req, res) => {
    console.log(req.body);
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        res.json({ success: false, message: "Error" })
    }

}

const verifyOrder = async (req, res) => {
    const {orderId , success} = req.body;
    try {
        if (success==="true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" })
        }
        else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({ success: false, message: "Not Paid" })
        }
    } catch (error) {
        res.json({ success: false, message: "Not  Verified" })
    }

}

export { placeOrder, listOrders, userOrders, updateStatus, verifyOrder, verifyRazorpayPayment }
