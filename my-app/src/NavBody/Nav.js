import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav2 from "../Nav2/Nav2";
import Nav1 from "../Nav1/Nav1";
import '../css/title.css'

function Nav() {

  return (
        <BrowserRouter>
            <header>
                <div className="inner">
                    <div className='widthsmall'>
                    <Nav1/>
                    <Nav2/>
                    </div>
                </div>
            </header>
        </BrowserRouter>
  );
}

export default Nav;