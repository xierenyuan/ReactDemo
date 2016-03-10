import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory } from 'react-router';
import '../common/lib';
import routes from '../common/routes';

ReactDOM.render( <Router history={browserHistory} routes={routes} />, document.getElementById('app'));
