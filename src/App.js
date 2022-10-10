import {Routes, Route} from "react-router-dom";

import Home from "./page/Home";
import Details from "./page/Details";
import NotFound from "./page/NotFound";


function App() {
    return (
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/country/:name' element ={<Details/>}/>
            <Route path='*' element ={<NotFound/>}/>
        </Routes>
    );
}

export default App;
