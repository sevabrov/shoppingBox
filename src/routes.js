import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import Home from './components/home';


const Routes = () => {
        return (
            <Switch>
                <Route path='/' exact component={Home}></Route>
            </Switch>
        );  
}
export default Routes;
