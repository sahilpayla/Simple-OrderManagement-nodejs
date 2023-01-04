const express = require('express')
const customerController = require("../controllers/customerController")
const productController=require('../controllers/productController')
const orderController = require("../controllers/orderController")
const router = express.Router()


// customer
router.post('/createCustomer',customerController.createCustomer)

// product
router.post('/createProduct',productController.createProduct)

// order
router.put('/createOrder',orderController.createOrder)



module.exports = router;