import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from "moment";
import { createTheme, ThemeProvider } from '@mui/material';

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

export default function DeleteUser() {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const t2 = new Date();
  // localstorage에서 데이터 받아오기
  const [LoginId, setLoginId] = useState();
  const [AccessToken, setAccessToken] = useState();
  const [AccessTokenExpiresIn, setAccessTokenExpiresIn] = useState();
  const [RefreshToken, setRefreshToken] = useState();
  const [RefreshTokenExpiresIn, setRefreshTokenExpiresIn] = useState();
  const t1 = Number(AccessTokenExpiresIn);
  const diff2 = moment.duration(t1 - t2).asMilliseconds(); // 400000이하로 떨어지면

  //api instance 생성
  const instance = axios.create({
    baseURL: 'http://bestinwoo.hopto.org:8080/',
    });
  // api header 부분 토큰이 들어가있다.
  const config = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    }};

  // 날짜가 만료되면 액세스 토큰과 리프레쉬 토큰 api로 재발급받아 저장한다.
  useEffect(() => {
    setLoginId(window.localStorage.getItem("LoginId"));
    setAccessToken(window.localStorage.getItem("AccessToken"));
    setAccessTokenExpiresIn(window.localStorage.getItem("AccessTokenExpiresIn"));
    setRefreshToken(window.localStorage.getItem("RefreshToken")); 
    setRefreshTokenExpiresIn(window.localStorage.getItem("RefreshTokenExpiresIn"));
    },[]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 사용자를 삭제한다.
  const DeUser = async () => {
    instance.delete(`/user/${localStorage.getItem("UserId")}`, config)
    .then(function(response) {
    console.log(response)
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("AccessTokenExpiresIn");
    localStorage.removeItem("RefreshToken");
    localStorage.removeItem("RefreshTokenExpiresIn");
    localStorage.removeItem("LoginId");
    localStorage.removeItem("UserId");
    localStorage.setItem("URL", null);
    localStorage.removeItem("State")
    }).then(function(error) {
    console.log(error)
    })
  }
  const DeleteUs = () => {
    try {
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
          // 회원 삭제
          setOpen(false);
          DeUser();
          alert("탈퇴 완료")
          history.push("/");
          history.go(0);
        }).then(function (error) {
          console.log(error)
        })
        } else {
          // 회원 삭제
          setOpen(false);
          DeUser();
          alert("탈퇴 완료")
          history.push("/");
          history.go(0);
        }
      } catch(e) {
    console.log(e)
  }
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button style={{color: '#fff', fontFamily: 'CookieRun-Regular', fontWeight: 'noraml', fontStyle: 'normal'}} color="secondary" variant="contained" onClick={handleClickOpen}>
        회원 탈퇴
      </Button>
      </ThemeProvider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>
          {"회원 탈퇴"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>
            회원 탈퇴를 하시면 작성하신 글과 댓글이 모두 사라지게 됩니다.
            <br></br>정말 회원 탈퇴 하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <ThemeProvider theme={theme}>
          <Button onClick={handleClose} style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>취소</Button>
          <Button onClick={DeleteUs} color="secondary"autoFocus style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>
            탈퇴
          </Button>
        </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}
