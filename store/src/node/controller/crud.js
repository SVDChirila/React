const createProduct = (req,res) =>{
    var product = {
        "name": "Ramsey", 
        "price": "$5.00", 
        "img": "img/prod4",
        "description":""
      };
      var productName = "Lyanna";
      createProduct[productName] = product;
      console.log(createProduct)
}

module.exports = {createProduct}