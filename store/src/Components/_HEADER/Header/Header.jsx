import React from 'react';
import './Header.css'
import Logo from '../Logo/Logo';
import Contact from '../Contact/Contact';
import Navigation from '../TopNavigation/Navigation';
import Search from '../Searchbar/Search';

class Header extends React.Component{
    render(){
        return( 
        <div className="header-container">
            <div className="header-top-container">
                <Logo />
                <Contact />
                <Navigation />
               
            </div>
            <div className="header-bottom">

                <Search />

            </div>
        </div>
        )       
    }
}


export default Header;