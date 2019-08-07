const joi = require("joi");

const getProdByIdSchema = joi.object().keys({
    id: joi.number().integer()
})

const validatePathParams = (schema) =>(req,res,next) =>{
    const result = schema.validate(req.params)
    if(result.error === null)
    next();
    else
    res.status(400).json({})
}

module.exports = {getProdByIdSchema, validatePathParams};