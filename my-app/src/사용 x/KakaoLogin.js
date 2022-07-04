import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function KakaoLogin1() {

    window.Kakao.init("49dbb957eb9235eeec3eaf9f85e5b609");

    function KakaoLogin() {
        window.Kakao.Auth.login({
            scope: 'profile_nickname, account_email',
            success: function(authObj) {
                console.log(authObj);
                window.Kakao.API.request({
                    url:'/v2/user/me',
                    success: res => {
                        const kakao_account = res.kakao_account;
                        console.log(kakao_account);
                    }
                });
            }
        })
    }  
  
  return (
    <div>
        <a href={KakaoLogin}><button>로그인</button></a>
    </div>
  );
}

export default KakaoLogin1;