const categ = require('../categories.json');
const prod = require('../prod.json')


const getCateg = (req, res) => {
    res.status(200).json({ data: [JSON.stringify(categ)] });
}

const getCategByID = (req, res) => {
    const id = req.params.id

    const categID = categ.filter(item => { return item.id == id })

    res.status(200).json({ data: [JSON.stringify(categID)] });
}

const categProd = (req, res) => {

    const id = req.params.id
    
    const prodCateg = prod.filter(item => { return item.categories == id})

    

    res.status(200).json({data: JSON.stringify(prodCateg)})

}

module.exports = { getCateg, getCategByID, categProd }