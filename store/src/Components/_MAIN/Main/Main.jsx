import React from 'react'
import Categories from '../Categories/Categories'
import './Main.css'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled: false,
            categories: {
                Face: {id: 1,
                    listItems:[
                    "Creams & Gels",
                    "Patches",
                    "Emulstions",
                    "Tonners",
                    "Face Cleansing",
                    "Make-up Removal",
                    "Scrubs",
                    "Peeling",
                    "Masks"
                ]},
                Body: {id:2,listItems:["Creams", "Gel Shower"]},
                Foot: {id:3, listItems:["Cream"]},
                Hands: {id:4, listItems:["Cream","Balsam"]},
                Hair: {id:5, listItems:["Shampoo","Balsam","Conditioner"]},
                Makeup: {id:6, listItems:["Mascara","Eyeliner"]}
            }
        }
    }



       

    render(){
        return(
            <div className="content">
                
            <Categories categories={this.state.categories} />
            </div>
            
        )
    }

}

export default Main