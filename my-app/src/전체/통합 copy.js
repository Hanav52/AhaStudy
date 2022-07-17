import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import SignIn from '../Login&Register/Login';
import React from 'react';
import Nav from '../NavBody/Nav';
import RealMain from '../Body/BodyImage';
import Join from '../Login&Register/Join';
import Posts from '../Body/Posts/Posts';


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
                <Route path="/post">
                    <Posts/>
                </Route>
            </Switch>
            </>
        </BrowserRouter>
        </body>
    </div>
    );
}

export default Hole;
