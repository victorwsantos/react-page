import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contatos from '../../pages/Contatos';
import Home from '../../pages/Home';
import Sobre from '../Sobre';
import Contrate from '../../pages/Contrate';
import Login from '../Form';
import Articles from '../../pages/Articles/';
import Article from '../Article';
import CreateArticle from '../../pages/CreateArticle';
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/Sobre-mim' component={ Sobre } />
            <Route path='/Contrate' component={ Contrate } />
            <Route path='/Contatos' component={ Contatos } />
            <Route path='/Login' component={ Login } />
            <Route path='/Create-Article' component={CreateArticle}/>
            <Route path='/artigos/:id' component={Article}/>
            <Route path='/Artigos' component={Articles}/>
            <Route path={'/'} component={ Home }/>
        </Switch>
    </BrowserRouter>
);

export default Rotas;