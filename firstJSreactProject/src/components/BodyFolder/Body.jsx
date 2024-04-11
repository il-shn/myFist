import React from 'react';
import style from './body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Body(props) {
    return (
        <>
        <div className={main}>
            <div className={style.genre}>
                Drama  |  Thriller  |  Supernatural
            </div>
            <div className={style.title}>
                Stranger Things
            </div>
            <div className={style.info}>
                2019 | DIRECTOR: 
                <span>
                    Shawn Levy 
                </span>    
                | seasons: 
                <span>
                    3 (5 Episodes)
                </span>
            </div>
            <div className={style.discription}>
                In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
            </div>
            <div className={style.stars}>
                <FontAwesomeIcon className={fa-star}></FontAwesomeIcon>
                <FontAwesomeIcon className={fa-star}></FontAwesomeIcon>
                <FontAwesomeIcon className={fa-star}></FontAwesomeIcon>
                <FontAwesomeIcon className={fa-star}></FontAwesomeIcon>
                <FontAwesomeIcon className={fa-star}></FontAwesomeIcon>
            </div>
            <div className={style.buttons}>
                <button>STREAM NOW
                    <div className={style.play}>
                        <FontAwesomeIcon className={fa-play} id="pl"></FontAwesomeIcon>
                    </div>
                </button>
                <button>ALL EPISODES</button>
            </div>
        </div>
        </>
        );
    }
    export default Body;