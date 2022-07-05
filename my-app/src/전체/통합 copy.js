import 'bootstrap/dist/css/bootstrap.min.css';
import BodyForMenu from '../Body/BodyForMenu';
import { BrowserRouter, BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import SignIn from '../Login&Register/Login';
import React from 'react';
import SignUp from '../Login&Register/Register';
import Nav from '../NavBody/Nav';
import RealMain from '../Body/BodyImage';
import Join from '../Login&Register/Join';


function Hole() {
    return (
    <div>
        <body>
        <BrowserRouter>
            <>
            <Switch>
                <Route exact path="/">
                    <RealMain/>
                </Route>
                <Route path="/login">
                    <SignIn/>
                </Route>
                <Route path="/register">
                    <Join/>
                </Route>
            </Switch>
            </>
        </BrowserRouter>
        </body>
    </div>
    );
}

export default Hole;
