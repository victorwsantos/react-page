import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contatos from '../Contatos';
import Home from '../Home';
import Sobre from '../Sobre';
import Contrate from '../Contrate';
import Login from '../Form';
import Articles from '../Articles';
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/Sobre-mim' component={ Sobre } />
            <Route path='/Contrate' component={ Contrate } />
            <Route path='/Contatos' component={ Contatos } />
            <Route path='/Login' component={ Login } />
            <Route path='/Artigos' component={Articles}/>
            <Route path={'/'} component={ Home }/>
        </Switch>
    </BrowserRouter>
);

export default Rotas;