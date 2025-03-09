import Table from "../models/tableModel.js";

export const getAvailableTables = async (req, res) => {
  try {
    // Fetch only tables that are NOT booked
    const tables = await Table.find({ isBooked: false });

    res.json({ success: true, tables });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
