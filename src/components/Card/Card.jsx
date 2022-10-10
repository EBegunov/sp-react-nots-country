import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {

    const population = new Intl.NumberFormat('ru-RU').format(props.population)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img className={styles.img} src={props.img} alt='No'/>
                <div className={styles.body}>
                    <h2 className={styles.title}>{props.name}</h2>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <b>Population</b>: {population}
                        </li>
                        <li className={styles.item}>
                            <b>Region</b>: {props.region}
                        </li>
                        <li className={styles.item}>
                            <b>Capital</b>: {props.capital}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;