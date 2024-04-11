import React from 'react';
import style from './age.css'

function Age() {
    return(
        <div className={style.ageBlock}>
            <div className={style.agge}>
                <div className={style.red}></div>
                <div id="sixteen">16+</div>
            </div>
        </div>
    );
};

export default Age;