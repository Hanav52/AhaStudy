import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import SignIn from '../Login&Register/Login';
import React from 'react';
import Nav from '../NavBody/Nav';
import RealMain from '../Body/BodyImage';
import Join from '../Login&Register/Join';
import Posts from '../Body/Posts/Posts';
import DetailPage from '../Body/DetailPage/DetailPage';
import MyProfile from '../MyProfile/MyProfile';
import PrimarySearchAppBar from '../Notification/Notification';


function Hole() {
    return (
        <body>
            <div>
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
                        <Route path="/noti">
                            <PrimarySearchAppBar/>
                        </Route>
                    </Switch>
                    </>
                </BrowserRouter>
            </div>
        </body>
    );
}

export default Hole;
