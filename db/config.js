const mongoose = require("mongoose");
const { ServerApiVersion } = require('mongodb');
mongoose.connect("mongodb+srv://Akshay:YNJb8zg54ENF6Mm@isro.wltoxxu.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
})

module.exports = mongoose;