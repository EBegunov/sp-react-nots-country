import React from 'react';
import styles from './Header.module.css'
import ThemeSwitcher from "../../UI/ThemeSwitcher";
import Logo from "../../UI/Logo";

const Header = () => {
    return (
            <header className={styles.wrapper}>
                <div className={styles.container}>
                    <Logo/>
                    <ThemeSwitcher/>
                </div>
            </header>
    );
};

export default Header;