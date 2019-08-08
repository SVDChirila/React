const categ = require('../categories.json');
const prod = require('../../Components/_MAIN/Products/ProductsList.json')


const getCateg = (req, res) => {
    res.status(200).json({ data: categ });
}

const getCategByID = (req, res) => {
    const id = req.params.id

    const categID = categ.filter(item => { return item.id == id })
    
    if(categID.length === 0){
        res.status(404).json({data:"File not found!"})
    }else{
        res.status(200).json({ data: categID });
    }

    
}

const categProd = (req, res) => {

    const id = req.params.id
    
    const prodCateg = prod.filter(item => { return item.categories == id})

    if(prodCateg.length === 0){
        res.status(404).json({data:"Resource not exist!"})
    }else{
         res.status(200).json({data: JSON.stringify(prodCateg)})
    }

   

}

module.exports = { getCateg, getCategByID, categProd }