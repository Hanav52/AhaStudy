import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import SignIn from '../Login&Register/Login';
import React from 'react';
import Nav from '../NavBody/Nav';
import RealMain from '../Body/BodyImage';
import Join from '../Login&Register/Join';
import Posts from '../Body/Posts/Posts';
import DetailPage from '../Body/상세페이지/DetailPage';
import MyProfile from '../내정보/MyProfile';


function Hole() {
    return (
    <div>
        <body>
        <BrowserRouter>
            <>
            <Switch>
                <Route exact path="/">
                    <Nav/>
                    <RealMain/>
                </Route>
                <Route path="/login">
                    <SignIn/>
                </Route>
                <Route path="/register">
                    <Join/>
                </Route>
                <Route path="/post">
                    <Nav/>
                    <Posts/>
                </Route>
                <Route path="/Detail">
                    <Nav/>
                    <DetailPage/>
                </Route>
                <Route path="/Profile">
                    <Nav/>
                    <MyProfile/>
                </Route>
            </Switch>
            </>
        </BrowserRouter>
        </body>
    </div>
    );
}

export default Hole;
