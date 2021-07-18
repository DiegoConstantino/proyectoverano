import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nose from '../paginas/Nose';
import Menu from '../components/menu/Menu';
import Home from '../paginas/Home'
import Registro from '../components/Registro/Registro/Registro';




function Aruta() {
    return (
        <div>
            <Router>
<Menu/>
<Switch>
    <Route path="/Nose" exact component={Nose}/>
    <Route path="/" exact component={Home}/>
    <Route path="/Registro" exact component={Registro}/>
   
    
    
    
</Switch>
            </Router>
        </div>
    )
}

export default Aruta
