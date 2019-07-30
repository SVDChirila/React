import React from 'react'
import './Categories.css'





const Categories = (props) => {

    const categories =Object.keys(props.categories);

    return (
        <div className="categories">
            <p className="all-categ">All Categories</p>
        {categories.map((category,index) =>{
            return <button key={index} className="button-category-name">{category}</button>
        })}
       </div>
   
   )
}

export default Categories