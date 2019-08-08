const prod = require('../../Components/_MAIN/Products/ProductsList.json')


const getProd = (req, res) => {


    if (Object.keys(req.query).length !== 0) {
        const query = prod.filter(item => {
            return (item.manufacturerid == parseInt(req.query.manufacturerid)) &&
                (item.categories == parseInt(req.query.categories))
        })
        //    console.log(query)
        res.status(200).json({ data: query })
    } else {

        res.status(200).json({data: prod});
    }
}

const getProdByID = (req, res) => {
    
    const id = req.params.id;
    const data = prod.filter((item) => {
            return item.id == id;
        });
        console.log("=================");

        console.log(data);
    if(data.length === 0){
    
    res.status(404).json({data:"ERROR 404: ===Resource not found==="})}
    else {
        res.status(200).json({ data: data })}
        
    }

module.exports = { getProd, getProdByID }