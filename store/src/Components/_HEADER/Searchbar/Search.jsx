import React from 'react'
import './Search.css'


const Search = () => {

    return(


       <>
        <div className="searchBar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search products by SKU or name"/>
        </div>
        
        <a href="#">
            <div className="myCart">
                <i className="fas fa-cart-plus cart-icon"></i>
                <div className="myCart-text">My Cart</div>
                <div className="count"> 12 </div>
            </div>
        </a>
        </>





    )






}

export default Search