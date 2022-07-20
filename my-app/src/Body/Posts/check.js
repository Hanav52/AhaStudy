import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from 'moment';

function Check() {

    // 토큰 재발행
    const history = useHistory();
    const t2 = new Date();
    // localstorage에서 데이터 받아오기
    const [visible, setVisible] = useState(null);
    const [LoginId, setLoginId] = useState();
    const [loginIdCheck, setloginIdCheck] = useState();
    setloginIdCheck(localStorage.getItem("writerLoginId"));
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

    const config = {
        'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    };

    const handleClickOpen = () => {
        if(visible === null) {
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
    };
    

    // 상세 페이지 이동할 떄 로그인 유무 판단
    
  return (
    <>
      
    </>
  );
}

export default Check;
