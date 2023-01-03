const express = require("express")
const router = express.Router()
const customerController = require("../controller/customerController")
const productController = require("../controller/productController")
const orderController = require("../controller/orderController")


router.get("/hello", (req, res) => {
  res.send("hello world")
})

//customer
router.post("/customer", customerController.createCustomer)

//product
router.post("/product", productController.createProduct)

//order
router.post("/order", orderController.createOrder)



module.exports = router