import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer/Footer";
import { BrowserRouter as Link, useHistory } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Section from "./section";
import { useState } from 'react';
import { useEffect } from 'react';
import { instance } from '../MyProfile/MyApi';

function RealMain() {
  const history = useHistory();
// localstorage에서 데이터 받아오기
  const [visible, setVisible] = useState();
  const [LoginId, setLoginId] = useState();
  const [AccessToken, setAccessToken] = useState();
  const [AccessTokenExpiresIn, setAccessTokenExpiresIn] = useState();
  const [RefreshToken, setRefreshToken] = useState();
  const [RefreshTokenExpiresIn, setRefreshTokenExpiresIn] = useState();

// 날짜가 만료되면 액세스 토큰과 리프레쉬 토큰 api로 재발급받아 저장한다.
  useEffect(() => {
      setVisible(window.localStorage.getItem("State"));
      setLoginId(window.localStorage.getItem("LoginId"));
      setAccessToken(window.localStorage.getItem("AccessToken"));
      setAccessTokenExpiresIn(window.localStorage.getItem("AccessTokenExpiresIn"));
      setRefreshToken(window.localStorage.getItem("RefreshToken")); 
      setRefreshTokenExpiresIn(window.localStorage.getItem("RefreshTokenExpiresIn"));
  },[]);

  const LogoutUser = () => {
    instance.post("/auth/logout",{} ,{
      headers: {
        'Authorization': `Bearer ` + window.localStorage.getItem("AccessToken")
      }
    })
      .then(function (response) {
        window.localStorage.removeItem("LoginId");
        window.localStorage.removeItem("AccessToken");
        window.localStorage.removeItem("AccessTokenExpiresIn");
        window.localStorage.removeItem("RefreshToken");
        window.localStorage.removeItem("RefreshTokenExpiresIn");
        window.localStorage.removeItem("UserId");
        window.localStorage.removeItem("State");
        alert(response.data.data);
        history.push("/");
        history.go(1);
        history.go(0);
      }).catch(function (error) {
        window.localStorage.removeItem("LoginId");
        window.localStorage.removeItem("AccessToken");
        window.localStorage.removeItem("AccessTokenExpiresIn");
        window.localStorage.removeItem("RefreshToken");
        window.localStorage.removeItem("RefreshTokenExpiresIn");
        window.localStorage.removeItem("UserId");
        window.localStorage.removeItem("State");
        alert("로그인이 만료되었습니다.");
        history.push("/login");
        history.go(1);
        history.go(0);
        console.log(error)
      }).then(function() {
      });
  }
  
  return (
    <div>
        <BrowserRouter>
        <Route exact path="/">
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
        <section>
          <div className="inner3">
            <div className='widthloginlogout'>
          <div className="program12-container">
            <div className="login-explain">
              <div className="login-maintitle">
                <div className="login-title">
                  자신이 원하는 유형의 스터디를 모집하거나 신청 해보세요.
                </div>
                {visible === null ? null : <div className="login-subtitle">
                  로그인 후 사용할 수 있습니다.
                </div>}
              </div>
              <div className="login-mainsubtitle">
              {visible === null ?  <button type="button" className="head-blog btn btn lg btn-warning" style={{marginRight: '10px'}} onClick={()=> {history.push("/login"); history.go(0)}}><Link>로그인</Link></button> : 
                          <button type="button" className="head-blog btn btn lg btn-warning"  onClick={LogoutUser} style={{marginRight: '10px'}}><Link>로그아웃</Link></button>}
              </div>
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