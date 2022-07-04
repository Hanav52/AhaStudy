import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/style.css";
import { useEffect, useState } from "react";

function App() {
  const JAVA_API_KEY = "49dbb957eb9235eeec3eaf9f85e5b609";

  const LoginApi = () => {
    window.Kakao.init(JAVA_API_KEY);
  }
  useEffect(LoginApi, []);

  const realmain = () => {
    window.location.href="/";
  }
  let loginTF = true;
  const changeTF = () => {
    console.log(TF);
    setTF(TF === true ? "true" + true : "false" + false);
  }
  
  const [TF, setTF] = useState(loginTF);

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
                <div className="first" onClick={KakaoLogin}>로그인</div>
                <div className="first" onClick={kakaoLogout}>로그아웃</div>
                <div className="first" onClick={unlinkApp}>앱 탈퇴</div>
        
                </div>
                <button onClick={changeTF}>{TF}</button>
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