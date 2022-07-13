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
import moment from "moment";
import axios from 'axios';

function RealMain() {
  const history = useHistory();
  const t2 = new Date();
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

  
  const t1 = Number(AccessTokenExpiresIn);
  const diff2 = moment.duration(t1 - t2).asMilliseconds(); // 400000이하로 떨어지면

  const onMakeList = () => {
    if(!visible === window.localStorage.getItem("State")) {
      alert("로그인 후 이용해주세요.");
    } else {
      alert("글 작성하기");
      // 400000이하로 떨어지면
      if(diff2 < 400000) {
        axios.post("http://bestinwoo.hopto.org:8080/auth/reissue", {
          accessToken : AccessToken,
          refreshToken: RefreshToken
      })
      .then(function (response) {
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("AccessTokenExpiresIn");
        localStorage.removeItem("RefreshToken");
        localStorage.removeItem("RefreshTokenExpiresIn");
        localStorage.setItem("AccessToken", response.data.accessToken);
        localStorage.setItem("AccessTokenExpiresIn", response.data.accessTokenExpiresIn);
        localStorage.setItem("RefreshToken", response.data.refreshToken);
        localStorage.setItem("RefreshTokenExpiresIn", response.data.refreshTokenExpiresIn);
        // 글작성하는 곳으로

      }).catch(function (error) {
        console.log(error)
      }).then(function() {
          // 항상 실행
      });
      } else {
        // 글 작성하는 곳으로 이동
      }
    }

  }

  // api 연동 부분

  



  // // const tokenExpiration = AccessTokenExpiresIn || new Date(new Date().getTime() + 60 * 1000 * 60);
  // // //setAccessTokenExpiresIn(tokenExpiration)
  // // console.log(AccessTokenExpiresIn)
  // // if(AccessTokenExpiresIn < 160) {
  // //   console.log(AccessTokenExpiresIn)
  // // }
  // console.log(AccessTokenExpiresIn)
  // const date1 = new Date(AccessTokenExpiresIn);
  
  // console.log(date1);
  // const refresh = () => {
  //   // const RefreshToken = localStorage.getItem("RefreshToken");
  //   // const AccessTokenExpiresIn = localStorage.getItem("AccessTokenExpiresIn");
    
  
  //   // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  //   if (moment(AccessTokenExpiresIn, 'YYYYMMDDHHmmss').diff(moment()) < 0 && RefreshToken) {
  //     const config = { accessToken : AccessToken, refreshToken : RefreshToken };
  
  //     // 토큰 갱신 서버통신
  //     axios.post("http://bestinwoo.hopto.org:8080/auth/logout", config)
  //     .then(function (response) {
  //       console.log(response)
  //     }).catch(function (error) {
  //         // 오류발생시 실행
  //     }).then(function() {
  //         // 항상 실행
  //     });
  
  //     // token = data.data.accessToken;
  //     // localStorage.setItem("accessToken", data.data.accessToken);
  //     // localStorage.setItem(
  //     //   "expiresAt",
  //     //   moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
  //     // );
  //   }
  
  // };

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
              {!visible ?  <button type="button" className="head-blog btn btn lg btn-warning"><Link to='login'>로그인</Link></button> : 
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