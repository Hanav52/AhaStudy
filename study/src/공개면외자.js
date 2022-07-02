import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBarMenu';
import BodyForMenu from './BodyForMenu';
import { BrowserRouter, BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import SignIn from './Login';
import React from 'react';
import SignUp from './Register';


function Hole() {
    return (
    <div>
        <BrowserRouter>
            <div id='page-top'>
            <div id='wrapper'>
            <>
            <Switch>
                <Route exact path="/">
                    <SideBar/>
                    <BodyForMenu/>
                </Route>
                <Route path="/login">
                    <SignIn/>
                </Route>
                <Route path="/register">
                    <SignUp/>
                </Route>
            </Switch>
            </>
            </div>
            </div>
        </BrowserRouter>
    </div>
    );
}

export default Hole;
