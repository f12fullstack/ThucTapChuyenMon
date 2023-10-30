const express = require("express")
const router = express.Router()
const productController = require("../Controllers/productCotroller")
router.post("/create",productController.createProduct)
router.get("/getAll",productController.getAllProduct)
router.put("/edit",productController.editProduct)
router.delete("/delete",productController.deleteProduct)
module.exports = router