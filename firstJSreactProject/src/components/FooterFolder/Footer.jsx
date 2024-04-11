import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgBreaking from './images/breaking.png'
import imgRain from './images/the rain.png'
import imgLife from './images/life.png'
import imgMoney from './images/money.png'
import imgSquid from './images/squid.png'
import style from './footer.css'

function Footer(){
return (
   
<footer>
    <div className={style.footer-head}>
        <div className={style.footer-title}>POPULAR THIS WEEK</div>
            <div  className={style.nextblock}>
                <div className={style.hover}>
                    <div className={style.previous}>
                        <FontAwesomeIcon icon={fa-angle-left} id="previous-icon"></FontAwesomeIcon>
                    </div>
                </div>
                <div className={style.hover}>
                    <div className={style.next}>
                        <FontAwesomeIcon icon={fa-angle-right} id="next-icon"></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    <div className={movie}>
        <img src={imgBreaking} alt=""/>
        <img src={imgRain} alt=""/>
        <img src={imgLife} alt=""/>
        <img src={imgMoney} alt=""/>
        <img src={imgSquid} alt=""/>
    </div>
</footer>

)
}
export default Footer;