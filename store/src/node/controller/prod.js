const prod = require('../prod.json')

const getProd = (req,res) =>{
    
    const id = req.params.id;
   if(req.query !== {}){
       const query = prod.filter(item =>{
        return (item.manufacturerid == parseInt(req.query.manufacturerid) && item.categories == parseInt(req.query.categories))
        })
       console.log(query)
       res.status(200).json({data:[JSON.stringify(query)]})
   }
    
    res.status(200).json({data: [JSON.stringify(prod)]});
}

const getProdByID = (req,res) =>{
    const id = req.params.id;
    
    const data = prod.filter((item)=> {
        return item.id == id;
    });
    console.log(data);
    res.status(200).json({data: data});
}
module.exports = {getProd, getProdByID}