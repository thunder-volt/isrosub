const mongoose = require("mongoose");

const brushSchema = new mongoose.Schema({
    name: String,
    height: Number,
    weight: Number
})

module.exports = mongoose.model("brushScatters", brushSchema);