import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Search from './pages/search';
import Product from './pages/product';

const Routes = () => (
    <Switch>
        <Route 
            exact 
            path='' 
            component={ Search }/>
        
        <Route 
            exact 
            path='/product/:id' 
            component={ Product }/>
        
        <Route 
            component={ () => ( 
                <div>Page not found</div>
            )}/>
    </Switch>
);
export default Routes;