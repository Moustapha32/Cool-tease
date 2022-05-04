import React from 'react';
import { Route, Switch } from 'react-router';

import Cart from './containers/Cart';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Thankyou from './containers/Thankyou';


const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/thankyou'} component={Thankyou} />


              

            </Switch>
        </>
    );
};
export default Router;
