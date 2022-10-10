import React, {useState, useEffect} from 'react';
// import {} from 'react-router-dom'
import axios from 'axios'
import styles from './Main.module.css'
import Search from "../../UI/Search";
import Dropdawn from "../../UI/Dropdawn";
import {ALL_COUNTRIES_SEPARATE_FIELDS} from "../../config";
import Card from "../Card";

const Main = () => {

    const selectedPlaceholder = 'Choose region'

    const [selected, setSelected] = useState(selectedPlaceholder)
    const [countries, setCountries] = useState([])

    console.log(countries[1])
    console.log('RENDER')

    useEffect(() => {
        axios.get(ALL_COUNTRIES_SEPARATE_FIELDS).then(({data}) => setCountries(data))
    }, [])


    return (
        <main className={styles.wrapper}>
            <section className={styles.selectionSection}>
                <div className={styles.selectionSection__container}>
                    <Search/>
                    <Dropdawn
                        selected={selected}
                        setSelected={setSelected}
                        selectedPlaceholder={selectedPlaceholder}
                    />
                </div>
            </section>

            <section className={styles.countrySection}>
                <div className={styles.countrySection__container}>
                    {
                        countries.map(item =>
                            <Card
                                key={item.name.official}
                                name={item.name.official}
                                img = {item.flags.png}
                                population = {item.population}
                                region = {item.region}
                                capital={item.capital[0]}
                            ></Card>
                        )
                    }
                </div>
            </section>


        </main>
    );
};

export default Main;