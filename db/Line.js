const mongoose = require("mongoose");

const lineSchema = new mongoose.Schema({
    name: String,
    intensity: Number,
})

module.exports = mongoose.model("lines", lineSchema);