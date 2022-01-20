import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'
import authOrApp from "./authOrApp";
import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={authOrApp}>
            <IndexRoute component={Dashboard}/>
        <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from="*" to='/' />
    </Router>
)

