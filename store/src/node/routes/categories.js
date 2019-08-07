// ----------------- IMPORTS ---------------- //
const express = require('express')
const router = express.Router();
const url = require('url');
const { getCateg, getCategByID, categProd } = require('../controller/categ')
// const categValidation = require('../middleware/categ')
const {validatePathParams, getProdByIdSchema} = require('../middleware/validation')
// ------------------------------------------ //



router.get("/categories/",getCateg);
router.get("/categories/:id",validatePathParams(getProdByIdSchema),getCategByID);
router.get("/categories/:id/products",validatePathParams(getProdByIdSchema),categProd);

module.exports = router