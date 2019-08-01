import React from 'react'
import './Products.css'


const Products = () =>{

    const jsonData = require('./ProductsList.json')
    

    return(
        <div id="products">
        {jsonData.map(prod =>
        
            
            <div className="product" id="prod1">
                <img src={require(`./${prod.img}`)} alt="body cream" className="product-img" />
                <h4>{prod.name}</h4>
                <span className="price">{prod.price}</span>
            </div>

           )}

    </div>
    )}
    export default Products

