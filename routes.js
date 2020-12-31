import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Batalha from './pages/batalha/batalha.index.js';
import Deus from './pages/deus/deus.index.js';

import Home from './pages/Home/index.js';
import Error from './pages/error/index.js';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/home"component={Home} />
                <Route exact path="/"component={Home} />
                <Route exact path="/batalha" component={Batalha}/>
                <Route exact path="/deus" component={Deus} />
                <Route  path="*" component={Error}/>
            </Switch>
        
        </BrowserRouter>
    );
}
export default Routes;