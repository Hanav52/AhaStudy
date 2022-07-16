import 'bootstrap/dist/css/bootstrap.min.css';
import BodyForMenu from '../Body/Body1~6/BodyForMenu1';
import { BrowserRouter, BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import SignIn from '../Login&Register/Login';
import React from 'react';
import SignUp from '../Login&Register/Register';
import Nav from '../NavBody/Nav';
import RealMain from '../Body/BodyImage';
import Join from '../Login&Register/Join';
import Posts1 from '../Body/Posts/Posts1';
import Posts2 from '../Body/Posts/Posts2';
import Posts3 from '../Body/Posts/Posts3';
import Posts4 from '../Body/Posts/Posts4';
import Posts5 from '../Body/Posts/Posts5';
import Posts6 from '../Body/Posts/Posts6';


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
                <Route path="/Posts1">
                    <Posts1/>
                </Route>
                <Route path="/Posts2">
                    <Posts2/>
                </Route>
                <Route path="/Posts3">
                    <Posts3/>
                </Route>
                <Route path="/Posts4">
                    <Posts4/>
                </Route>
                <Route path="/Posts5">
                    <Posts5/>
                </Route>
                <Route path="/Posts6">
                    <Posts6/>
                </Route>
            </Switch>
            </>
        </BrowserRouter>
        </body>
    </div>
    );
}

export default Hole;
