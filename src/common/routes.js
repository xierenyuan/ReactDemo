/**
 * @用途
 * @作者 xierenhong
 * @时间 16/3/10
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../component/App';
import Demo from '../component/From';

const routes = (
    <Route component={App} path="/">
        <IndexRoute component={App} />
        <Route component={Demo} path="from"/>
    </Route>
);

export default routes;