import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contatos from '../Contatos';
import Home from '../Home';
import Objetivos from '../Objetivos';
import Sobre from '../Sobre';
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/Objetivos' component={ Objetivos } />
            <Route path='/Sobre' component={ Sobre } />
            <Route path='/Contatos' component={ Contatos } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;