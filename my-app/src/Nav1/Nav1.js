import "../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav2 from "../Nav2/Nav2";

//첫번째 줄 메뉴
function Nav1() {
    
    const [visible, setVisible] = useState(true);

    return(
        <div className="head-container">
            <div className="head-brand">
                <Link to="/">Aha Study</Link>
            </div>
            <button type="button" className="head-blog btn btn lg btn-warning">
                <Link to="/login">{visible ? "로그인" : "로그아웃"}</Link>
            </button>
        </div>
    )
}

export default Nav1;