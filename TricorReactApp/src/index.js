import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './base.css';

import Menu from './Components/Menu';
import NewEmployee from './Components/NewEmployee';
import EmployeeList from './Components/EmployeeList';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/menu' />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/employee/new' component={NewEmployee} />
            <Route exact path='/employee/list' component={EmployeeList} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
