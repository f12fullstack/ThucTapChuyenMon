const Product = require("../Model/Product")

async function createProduct(req, res) {
    try {
        const{category, name, price, image} = req.body
        const newProduct = await Product.create({
            category, name, price, image
        })
        return res.status(200).json({
            message: "Tạo thành công"
        })
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
}
async function getAllProduct(req, res) {
    try {
        const allProduct = await Product.find()
        return res.status(200).json({
            message: "Lấy thành công",
            allProduct
        })
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {createProduct, getAllProduct}

