import React, {useState} from 'react';
import styles from './Search.module.css'
import {IoSearch} from 'react-icons/io5'

const Search = () => {
    const [placeholder, setPlaceholder] = useState('Search ...')

    const handlerFocus = () => setPlaceholder('')
    const handlerBlur = () => setPlaceholder('Search ...')

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type='text'
                    placeholder={placeholder}
                    onFocus={handlerFocus}
                    onBlur={handlerBlur}
                />
                <IoSearch className={styles.icon}/>
            </div>
        </div>
    );
};

export default Search;