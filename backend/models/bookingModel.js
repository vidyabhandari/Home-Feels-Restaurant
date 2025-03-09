import mongoose from "mongoose";

const tableBookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tableId: { type: mongoose.Schema.Types.ObjectId, ref: "Table", required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    people: { type: Number, required: true },
    payment: { type: Boolean, default: false },
    paymentGateway: { type: String, default: "razorpay" },
    status: { type: String, default: "Pending" },
}, { timestamps: true });

export default mongoose.model("TableBooking", tableBookingSchema);
