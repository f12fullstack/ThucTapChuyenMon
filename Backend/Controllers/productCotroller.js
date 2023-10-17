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
    } catch (error) {
        
    }
}