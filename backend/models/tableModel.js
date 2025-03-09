import mongoose from "mongoose";

const TableSchema = new mongoose.Schema({
  number: Number,
  seats: Number,
  isBooked: Boolean,
  date: String,
  time: String,
});

export default mongoose.model("Table", TableSchema);
