const prod = require('../prod.json')
const prodValidation = (req,res,next) =>{

     const id = req.params.id
     
    // console.log(id);
    // console.log(prod.filter((item) =>{return item.id == id }))
    const object = prod.filter((item) =>{return item.id == id }).pop();
    console.log(object);
     if(object !== undefined && object !== null){
         next();
     }
    
    res.status(404).json({errors:[{message: "File not found"}]})
     return;
}

module.exports = prodValidation