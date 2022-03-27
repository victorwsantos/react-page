import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Contatos from '../../pages/Contatos';
import Home from '../../pages/Home';
import FormUser from '../../pages/User';
import Articles from '../../pages/Articles/';
import Article from '../Article';
import CreateArticle from '../../pages/CreateArticle';
import SingIn from '../../pages/SingIn';
import { context } from "../../functions/context";
import { useContext } from "react";



const PrivateRoutes = (props) => {
    
    const {authentication} = useContext(context)

    return(
        authentication ? <Route  {...props}/> : <Redirect to='/Singin'/>)
}

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Contatos' component={Contatos} />
            <Route path='/Login' component={FormUser} />
            <Route path='/Singin' component={SingIn} />
            <PrivateRoutes path='/Create-Article' component={CreateArticle} />
            <PrivateRoutes path='/artigos/:id' component={Article} />
            <Route path='/Artigos' component={Articles} />
            <Route path={'/'} component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;