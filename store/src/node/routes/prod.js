// ----------------- IMPORTS ---------------- //
const express = require('express')
const router = express.Router();
const url = require('url');
const { getProd, getProdByID } = require('../controller/prod')
const prodValidation = require('../middleware/prod')
// ------------------------------------------ //



router.get("/products/",getProd);
router.get("/products/:id",prodValidation,getProdByID);

module.exports = router