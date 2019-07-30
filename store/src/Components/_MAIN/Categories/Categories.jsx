import React from 'react'
import './Categories.css'

const Categories = () => {
    return (
        <div className="categories">
            <ul>

                <li className="all-categ">All Categories</li>
                <li className="categories-item">
                    <a href=""> Face</a>
                    <ul className="face-list">
                        <li className="items"><a href="">Creams & gels</a></li>
                        <li className="items"><a href="">Patches</a></li>
                        <li className="items"><a href="">Emulsions</a></li>
                        <li className="items"><a href="">Toners</a></li>
                        <li className="items"><a href="">Face cleansing</a></li>
                        <li className="items"><a href="">Make up removal</a></li>
                        <li className="items"><a href="">Scrubs</a></li>
                        <li className="items"><a href="">Peeling</a></li>
                        <li className="items"><a href="">Masks</a></li>
                    </ul>
                </li>


                <li className="categories-item">
                    <a href="">Body</a>
                    <ul className="body-list">
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                    </ul>
                </li>

                <li className="categories-item">
                    <a href="">Foot</a>

                    <ul className="foot-list">
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                    </ul>
                </li>

                <li className="categories-item">
                    <a href="">Hands</a>
                    <ul className="hands-list">
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"> <a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                    </ul>
                </li>

                <li className="categories-item">
                    <a href="">Hair</a>
                    <ul className="hair-list">
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                    </ul>
                </li>

                <li className="categories-item">
                    <a href="">Makeup</a>
                    <ul className="makeup-list">
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                        <li className="items"><a href=""></a></li>
                    </ul>
                </li>
            </ul>

            <div className="ads">
                <a href="#">
                    <img src="./ads/img1.jpg" alt="" className="ad" />
                </a>
            </div>

        </div>
    )
}

export default Categories