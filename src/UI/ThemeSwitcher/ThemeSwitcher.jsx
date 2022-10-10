import React from "react";
import styles from "./ThemeSwitcher.module.css";
import {IoSunny} from "react-icons/io5"
import {IoMoonSharp} from 'react-icons/io5'
import {ThemeContext, themes} from "../../contexts/ThemeContext";


const ThemeSwitcher = () => {


    return (
        <ThemeContext.Consumer>
            {({theme, setTheme}) => (
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                            <label className={styles.box} htmlFor="toggler">
                                <input
                                    className={styles.input}
                                    id="toggler"
                                    type="checkbox"
                                    onClick={() => {
                                        if (theme === themes.light) setTheme(themes.dark)
                                        if (theme === themes.dark) setTheme(themes.light)
                                    }}
                                    checked={theme === themes.dark}
                                    readOnly
                                />

                                {
                                    theme === themes.dark
                                        ?
                                        <>
                                           <IoSunny className={styles.icon}/>
                                        <span className={styles.text}>Light theme</span>

                                        </>
                                        :
                                        <>
                                            <IoMoonSharp className={styles.icon}/>
                                            <span className={styles.text}>Dark theme</span>

                                        </>



                                }

                            </label>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
};

export default ThemeSwitcher;
