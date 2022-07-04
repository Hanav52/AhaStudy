import 'bootstrap/dist/css/bootstrap.min.css';
import BodyForMenu from '../Body/BodyForMenu';
import { BrowserRouter, BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import SignIn from '../Login&Register/Login';
import React from 'react';
import SignUp from '../Login&Register/Register';
import Nav from '../NavBody/Nav';


function Hole() {
    return (
    <div>
        <BrowserRouter>
            <div id='page-top'>
            <div id='wrapper'>
            <>
            <Switch>
                <Route exact path="/">
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
