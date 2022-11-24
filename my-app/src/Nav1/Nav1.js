import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountMenu from '../NavBody/AfterLogin';
import '../css/title.css'
import '../css/stylemain.css'


//첫번째 줄 메뉴
function Nav1() {
    const history = useHistory();
    const [visible, setVisible] = useState();
    useEffect(() => {
        setVisible(window.localStorage.getItem("State"));
    },[]);
    return(
        <div className="head-container">
            <div className="head-brand">
                <Link onClick={()=> {history.push("/"); history.go(0)}} style={{
                    fontWeight: "bold",
                    fontSize: "1.7rem",
                    fontFamily: 'CookieRun-Regular', 
                    fontStyle: 'normal'
                    }}>Aha Study</Link>
            </div>
            {visible === null ? <button type="button" className="head-blog btn btn lg btn-warning"><Link onClick={()=> {history.push("/login"); history.go(0)}} style={{
                fontFamily: 'CookieRun-Regular', fontWeight: 'bold', fontStyle: 'normal'
            }}>로그인</Link></button> : <AccountMenu/>}
        </div>
    )
}

export default Nav1;