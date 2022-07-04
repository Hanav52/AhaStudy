import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css";
import { useEffect, useState } from "react";
import kakaologin from './img/kakao_login.png'
import React from 'react';

function App() {
  //자바스크립트 api key
  const JAVA_API_KEY = "49dbb957eb9235eeec3eaf9f85e5b609";
  // 카카오 api 가져오기
  const LoginApi = () => {
    window.Kakao.init(JAVA_API_KEY);
  }
  // 카카오 api를 렌더링될때 한번만 실행하기
  useEffect(LoginApi, []);
  // 메인화면으로 이동하기
  const realmain = () => {
    window.location.href="/";
  }
  // true false로 로그인 로그아웃 구분하기
  let loginTF = true;
  const changeTF = () => {
    console.log(TF);
    setTF(TF === true ? false : true);
  }
  // 상태변경 확인하기
  const [TF, setTF] = useState(loginTF);

 // const [Sty, setSty] = useState(div.style.dis)

  const[flipped, setFlipped] = React.useState(false);
  const onFlip = () => {
    setFlipped((current) => !current);
  }



  // 로그안함수
   function KakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
          success: function(data) {
            console.log(data);
            window.Kakao.API.request({
              url:'/v2/user/me',
              success: res => {
               const kakao_account = res.kakao_account;
               console.log(kakao_account);
               const name = JSON.stringify(kakao_account.profile.nickname);
               alert('어서오세요 ' + name + '님')

                }
            });
          }
      })
  }
  // 로그아웃 함수
        function kakaoLogout() {
          if (!window.Kakao.Auth.getAccessToken()) {
          alert('로그인후 이용해주세요')
          return
          }
          window.Kakao.Auth.logout(function() {
          alert('로그아웃 되었습니다')
          })
          window.location.reload();
      }
  // 앱 탈퇴 함수
        function unlinkApp() {
            window.Kakao.API.request({
            url: '/v1/user/unlink',
            success: function(res) {
                alert('탈퇴되었습니다')
            },
            fail: function(err) {
                alert('로그인후 이용해주세요')
            },
            })
            window.location.reload();
        }

  const log = () => {
    return(
      <div onClick={kakaoLogout}><div className="first" >로그아웃</div></div>
    )
  }
        // 화면에 나오는 부분
  return (
    <Router>
      <div className="App">
          <Route path="/app">
            <section>
            <div className="main">
            <div className="inner">
                <div className="login">
                <div className="font-title">로그인</div>
                <div className="kakao">
                <div onClick={KakaoLogin}><img src={kakaologin} className="ho" alt="카카오로그인" onClick={onFlip}></img></div>
                <div onClick={kakaoLogout}><div className="first" >로그아웃</div></div>
                <div onClick={unlinkApp}><div className="first" >앱 탈퇴</div></div>
                <button onClick={changeTF} disabled={flipped === false}>{TF}ssdfsd</button>
                <button onClick={onFlip}>flip</button>
                </div>
                <div className="first" onClick={realmain}>처음화면</div>
                </div>
            </div>
            </div>
        </section>
          </Route>
      </div>
    </Router>
  );
}

export default App;