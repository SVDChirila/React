// ----------------- IMPORTS ---------------- //
const express = require('express')
const router = express.Router();
const url = require('url');
const { getCateg, getCategByID, categProd } = require('../controller/categ')
const categValidation = require('../middleware/categ')
// ------------------------------------------ //



router.get("/categories/",getCateg);
router.get("/categories/:id",categValidation,getCategByID);
router.get("/categories/:id/products",categValidation,categProd);

module.exports = router