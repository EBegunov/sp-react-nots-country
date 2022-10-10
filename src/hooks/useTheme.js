import {useState, useLayoutEffect} from 'react';

const UseTheme = () => {

    // const getTheme = () => {
    //
    // }

    const [theme, setTheme] = useState('dark')

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        console.log(document.documentElement)
        localStorage.setItem('theme', theme)
    }, [theme])

    return {theme, setTheme}
};

export default UseTheme;