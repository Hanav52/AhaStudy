import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer/Footer";
import { BrowserRouter as Link, useHistory } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Swal from 'sweetalert2'
import Nav from "../NavBody/Nav";
import Section from "./section";
import SignIn from '../Login&Register/Login';
import { useState } from 'react';
import { useEffect } from 'react';

function RealMain() {
  const history = useHistory();

  const [visible, setVisible] = useState();
  useEffect(() => {
      setVisible(window.localStorage.getItem("State"));
  },[]);

  const onMakeList = () => {
    if(visible === window.localStorage.getItem("State")) {
      alert("로그인 후 이용해주세요.");
    }
  }

  

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <BrowserRouter>
        <Route exact path="/">
        <Nav/>
        <section>
          <div className="inner1">
            <div className="main1">
              <div className="frontmain">
              Aha Study는 자신이 원하는 유형의
              <br/>스터디를 할 수 있는 곳입니다.
              <br/><br/>
              </div>
            </div>
          </div>
        </section>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <section>
          <div className="inner3">
          <div className="program12-container">
            <div className="login-explain">
              <div className="login-maintitle">
                <div className="login-title">
                  자신이 원하는 유형의 스터디를 모집하거나 신청 해보세요.
                </div>
                <div className="login-subtitle">
                  로그인 후 사용할 수 있습니다.
                </div>
              </div>
              <div className="login-mainsubtitle">
              {visible ?  <button type="button" className="head-blog btn btn lg btn-warning"><Link to='login'>로그인</Link></button> : 
                          <button type="button" className="head-blog btn btn lg btn-warning"><Link to='login'>로그아웃</Link></button>}
              <button onClick={onMakeList} type="button" className="head-blog btn btn lg btn-outline-warning" ><Link>글 작성하기</Link></button>
              </div>
            </div>
          </div>
          </div>
        </section>
        </Route>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default RealMain;