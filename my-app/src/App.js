import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css";
import kakaologin from './img/kakao_login.png'
import React from 'react';

function App({visible, setVisible}) {
  // 메인화면으로 이동하기
  const realmain = () => {
    window.location.href="/";
  }

  // 로그인함수
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
                alert('로그아웃 되었습니다.')
                window.location.reload();
            },
            fail: function(err) {
                alert('로그인후 이용해주세요')
            },
            })
            window.location.reload();
        }
        
  const Unlink = () => {
    return(
      <div onClick={unlinkApp}><div className="first" >로그아웃</div></div>
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
                <div>{!visible ? null : <div onClick={KakaoLogin}>
                                  <img src={kakaologin} className="ho" alt="카카오로그인" onClick={() => { setVisible(!visible); }}/>
                                 </div> }
                </div>
                <div>{!visible ? <Unlink/> : null }</div>
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