import React from 'react';
import style from './css_modules/header.css';
import netflixlogo from './images/netflix_logo.png';
import avatar from './images/girl.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header>
            <div className={style.logo-block}>
                <img src={netflixlogo} id="logo" alt="img"/>
                <div className={style.head-title}>
                    Friday July 8th
                </div>
            </div>
            <div className={style.girl-block}>
                <div className={style.search-box}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" ></FontAwesomeIcon>
                </div>
                <div className={style.girl-box}>
                <img src={avatar} alt="img" id="girl"/>
                </div>
            </div>
            
        </header>
    );
}
export default Header;