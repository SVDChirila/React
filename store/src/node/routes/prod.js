// ----------------- IMPORTS ---------------- //
const express = require('express')
const router = express.Router();
const url = require('url');
const {createProduct} = require('../controller/crud');
const { getProd, getProdByID } = require('../controller/prod')
// const prodValidation = require('../middleware/prod')
const { getProdByIdSchema, validatePathParams} = require('../middleware/validation')
// ------------------------------------------ //



router.get("/products/",getProd);
router.get("/products/:id",validatePathParams(getProdByIdSchema),getProdByID);
router.post("/createproduct", createProduct);
module.exports = router