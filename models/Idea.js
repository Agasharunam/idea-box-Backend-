const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["New", "In Progress", "Done"], default: "New" },
});

module.exports = mongoose.model("Idea", ideaSchema);
