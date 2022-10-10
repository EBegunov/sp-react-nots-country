import React, {useState} from 'react';
import styles from './Dropdawn.module.css'
import {IoChevronUpSharp} from 'react-icons/io5'
import {IoChevronDownSharp} from 'react-icons/io5'
import {IoCloseSharp} from 'react-icons/io5'


const Dropdawn = ({selected, setSelected, selectedPlaceholder}) => {

    const selectedItem = ['America', 'Africa', 'Europe', 'Asia', 'Oceania',]

    const [isActive, setIsActive] = useState(false)

    const handlerSwitcher = () => {
        // e.stopPropagation(); // Need? Or not?
        setIsActive(!isActive)
    }

    /*Сделать закрытие выбора региона по клику вне элемента*/

    const handlerSelected = (e) => {
        setSelected(e.target.textContent)
        setIsActive(!isActive)
    }

    const handlerClear = () => {
        setSelected(selectedPlaceholder)
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div
                    className={styles.value}
                    onClick={handlerSwitcher}
                >
                    {selected}
                </div>
                <IoCloseSharp
                    className={styles.clear}
                    onClick={handlerClear}
                />
                {
                    isActive
                        ? <IoChevronUpSharp className={styles.choice}/>
                        : <IoChevronDownSharp className={styles.choice}/>
                }
                {isActive &&
                    <div className={styles.content}>
                        {
                            selectedItem.map(item =>
                                <div
                                    key={item}
                                    className={styles.item}
                                    onClick={handlerSelected}
                                >
                                    {item}
                                </div>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Dropdawn;