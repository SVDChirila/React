import React from 'react'
import Categories from '../Categories/Categories'
import './Main.css'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: {
                Face: [
                    "Creams & Gels",
                    "Patches",
                    "Emulstions",
                    "Tonners",
                    "Face Cleansing",
                    "Make-up Removal",
                    "Scrubs",
                    "Peeling",
                    "Masks"
                ],
                Body: [],
                Foot: [],
                Hands: [],
                Hair: [],
                Makeup: []
            }
        }
    }

    render(){
        return(
            <div className="content">
                
            <Categories categories={this.state.categories}/>
            </div>
            
        )
    }

}

export default Main