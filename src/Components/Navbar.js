import React from 'react';
import Logo from '../Assets/FD-Logo-Pink.png';
import Menu from '../Assets/list (1).svg';
import SearchIcon from '../Assets/search.svg';
import Person from '../Assets/person-circle.svg';

function Navbar() {
    return(
        <>
        <div className="container-fluid">
            <div className="row navbar">
                <div className="left-navbar col">
                    <img src={Menu} alt='icon-menu' className="icon-menu"/>
                    <img src={Logo} alt="logo" className="fd-logo" />
                    <div className="search-bar">
                        <img src={SearchIcon} alt='icon-menu' className="icon-search"/>
                        <input placeholder="Search products, articles, topics, brands, etc"/>
                    </div>
                </div>
                <div className="right-navbar col-2">
                    <img src={Person} alt='icon-menu' className="icon-person"/>
                    <div className="signin-button">LOGIN / SIGNUP</div>
               </div>
            </div>
        </div>
        <div className="container-fluid p-0">
            <div className="lower-navbar">
                <p className="category-text">SKINCARE</p>
                <p className="category-text">MAKE UP</p>
                <p className="category-text">BODY</p>
                <p className="category-text">HAIR</p>
                <p className="category-text">FRAGRANCE</p>
                <p className="category-text">NAILS</p>
                <p className="category-text">TOOLS</p>
                <p className="category-text">BRANDS</p>
            </div>
        </div>
        </>
    )
}
export default Navbar;