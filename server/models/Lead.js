const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  status: {
    type: String,
    enum: ["New", "Contacted", "Follow-up", "Converted"],
    default: "New"
  },
  note: String
});

module.exports = mongoose.model("Lead", leadSchema);