const categ = require('../categories.json')
const categValidation = (req,res,next) =>{

     const id = req.params.id
     
    const object = categ.filter((item) =>{return item.id == id }).pop();
    if(object !== undefined && object !== null){
         next();
     }
    
    res.status(404).json({errors:[{message: "File not found"}]})
     return;
}

module.exports = categValidation