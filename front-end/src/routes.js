import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Initial from './pages/Initial';
import Verificacao from './pages/Verificacao';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial} />
                <Route path="/boasvindas" component={Verificacao} />
                </Switch>
        </BrowserRouter>
        
    );
}

