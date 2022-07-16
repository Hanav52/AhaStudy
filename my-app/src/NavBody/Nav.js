import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav2 from "./Nav2";
import Nav1 from "./Nav1";

function Nav() {

  return (
        <BrowserRouter>
            <header>
                <div className="inner">
                    <Nav1/>
                </div>
                    <Nav2/>
            </header>
        </BrowserRouter>
  );
}

export default Nav;