const Product = require("../Model/Product")

async function createProduct(req, res) {
    try {
        const{category, name, price, image} = req.body
        const newProduct = await Product.create({
            category, name, price, image
        })
        return res.json({
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
        return res.json({
            message: "Lấy thành công",
            allProduct
        })
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
}
async function editProduct(req, res) {
    try {
        const{category, name, price, image, id} = req.body
        console.log(req.body);
        const product = await Product.findOne({ _id: id });
        if (product === null) {
            return res.json({
                message: "Không tồn tại sản phẩm này!"
            })
        } 
        else {
            product.category = category
            product.name = name
            product.price = price
            product.image = image
            await product.save()
            return res.json({
                message: "Sửa thành công"
            })
        }
    } catch (error) {
        console.log(error);
    }
}
async function deleteProduct(req, res) {
    try {
        const{category, name, price, image, id} = req.body
        console.log(req.body);
        const product = await Product.findOne({ _id: id });
        if (product === null) {
            return res.json({
                message: "Không tồn tại sản phẩm này!"
            })
        } 
        else {
            await product.deleteOne()
            return res.json({
                message: "Xóa thành công"
            })
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = {createProduct, getAllProduct, editProduct, deleteProduct}

