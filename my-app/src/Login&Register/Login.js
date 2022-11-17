import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Route, Router, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { apiUrl, instance } from '../MyProfile/MyApi';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc107',
    },
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Hanav52/AhaStudy" style={{cursor: 'pointer'}} underline="hover">
      Aha Study
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
    const history = useHistory({forceRefresh: true});
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const data = { id: userId, password: password };

    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    const onSubmit = (e) => {
            axios.post(`${apiUrl}/auth/login`, data, {
                headers: {
                'Content-Type': 'application/json'
                }
              }
            ).then(function (response) {
                window.localStorage.setItem("LoginId" , response.data.loginId);
                window.localStorage.setItem("AccessToken", response.data.accessToken);
                window.localStorage.setItem("AccessTokenExpiresIn", response.data.accessTokenExpiresIn);
                window.localStorage.setItem("RefreshToken", response.data.refreshToken);
                window.localStorage.setItem("RefreshTokenExpiresIn", response.data.refreshTokenExpiresIn);
                window.localStorage.setItem("UserId", response.data.userId);
                window.localStorage.setItem("State", true); //false 에서 true로 변환 로그인 버튼에서 알림, 아이디, 프로필이 나와야한다.
                history.push("/");
                history.go(1);
                history.go(0);
            }).catch(function (error) {
                alert("아이디 및 비밀번호를 틀리셨습니다.");
            }).then(function() {

            })
    }
    const changeUser = (e) => {
      setUserId(e.target.value);
    }
    const changePassword = (e) => {
      setPassword(e.target.value)
    }
  return (
    <Route path='/login'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ fontFamily: 'CookieRun-Regular' }}>
            로그인
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="아이디"
              autoComplete="email"
              autoFocus
              value={userId}
              onChange={changeUser}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={changePassword}
            />
            <ThemeProvider theme={theme}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
              style={{ fontFamily: 'CookieRun-Regular' }}
            >
              로그인
            </Button>
            </ThemeProvider>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link underline="hover" href="register" style={{cursor: 'pointer'}}>
                  계정이 없으십니까? 회원가입
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Route>
  );
}