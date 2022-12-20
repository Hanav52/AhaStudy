import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment';
import UpdateIntroDetail from './UpdateIntroDetail';
import { createTheme, ThemeProvider } from '@mui/material';
import { instance } from './MyApi';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ff7473',
    },
    three: {
      main: '#ffc107'
    },
    four: {
      main: '#fff'
    }
  },
});

export default function UpdateIntro() {
    const [open, setOpen] = useState(false);
    
    //api 헤더 부분
    const config = {
        'Authorization': `Bearer ` + window.localStorage.getItem("AccessToken")
      }

    const handleClickOpen = () => {
        if(visible === null) {
        alert("로그인 후 이용해주세요.");
        } else {
        // 400000이하로 떨어지면
        if(diff2 < 400000) {
            instance.post("/auth/reissue", {
            accessToken : AccessToken,
            refreshToken: RefreshToken
        }, config)
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
            setOpen(true);
        }).catch(function (error) {
        }).then(function() {
            // 항상 실행
        });
        } else {
            // 글 작성하는 곳으로 이동
            setOpen(true);
        }
        }
    };
    const handleClose = () => { 
        setOpen(false);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        e.persist();
        instance.patch(`/user/${localStorage.getItem("UserId")}`, {
          introduce: localStorage.getItem("introValue")
        }, {
            headers: {
            'Authorization': `Bearer ` + window.localStorage.getItem("AccessToken")
        }})
        .then(function(response) {
          handleClose();
        })
    }
    // 토큰 재발행
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

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button style={{color: '#fff', fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}} variant="contained" onClick={handleClickOpen} color="three">
        수정
      </Button>
      </ThemeProvider>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogContent>
          <DialogContentText>
            <UpdateIntroDetail/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <ThemeProvider theme={theme}>
          <Button onClick={handleClose} style={{margin: '10px', fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}} color="four" variant="contained">취소</Button>
          <Button onClick={(e) => {onSubmit(e); history.go(0)}} color="three" variant="contained" style={{color: '#fff', fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>저장</Button>
        </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}
