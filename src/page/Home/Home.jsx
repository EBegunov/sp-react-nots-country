import React from 'react';
import styles from './Home.module.css'
import Header from "../../components/Header";
import Main from '../../components/Main/'



const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header/>
                <Main/>
            </div>
        </div>
    );
};

export default Home;