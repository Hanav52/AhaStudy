import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiBringForward } from "react-icons/ri";

function Nav1() {

  const [visible, setVisible] = useState(true);
  
  return (
    <div>
        <BrowserRouter>
        <div>
        <header>
          <div className="inner">
            <div className="head-container">
              <div className="head-brand">
              <RiBringForward/>
                <Link to="/">MyInt</Link>
              </div>
              <ul className="nav justify-content-center">
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning">참고사이트</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning">도면</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning">설명</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning">문의</Link>
                </li>
              </ul>
              <button type="button" className="head-blog btn btn lg btn-warning">
                <Link to="/app">{visible ? "로그인" : "로그아웃"}</Link>
              </button>
            </div>
          </div>
        </header>
      </div>
        
        </BrowserRouter>
        
    </div>
  );
}

export default Nav1;