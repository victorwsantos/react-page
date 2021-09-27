import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contatos from '../Contatos';
import Home from '../Home';
import Sobre from '../Sobre';
import Contrate from '../Contrate';
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/Sobre-mim' component={ Sobre } />
            <Route path='/Contrate' component={ Contrate } />
            <Route path='/Contatos' component={ Contatos } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;