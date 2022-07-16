import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav2 from "./Nav2";
import AccountMenu from './로그인후';
import moment from 'moment';


//첫번째 줄 메뉴
function Nav1() {
    
    const [visible, setVisible] = useState();
    useEffect(() => {
        setVisible(window.localStorage.getItem("State"));
    },[]);
    return(
        <div className='inner'>
        <div className="head-container">
            <div className="head-brand">
                <Link to="/">Aha Study</Link>
            </div>
            {!visible ? <button type="button" className="head-blog btn btn lg btn-warning"><Link to="/login">로그인</Link></button> : <AccountMenu/>}
        </div>
        </div>
    )
}

export default Nav1;