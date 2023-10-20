const mongo = require("mongoose")
const productSchema = new mongo.Schema({
    category: {
        type: String,
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: Array
    }
})
const Product = mongo.model("Product", productSchema)
module.exports = Product