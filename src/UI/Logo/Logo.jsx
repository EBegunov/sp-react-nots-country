import React from 'react';
import styles from './Logo.module.css'
import Earth from "../../design/Earth.png";

const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img className={styles.logo} src={Earth} alt='No'/>
            </div>
        </div>
    );
};

export default Logo;