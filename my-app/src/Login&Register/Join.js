import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RRegister.css'
import axios from 'axios';
import { Avatar, Typography } from '@mui/material';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import { instance } from '../MyProfile/MyApi';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/Hanav52/AhaStudy" style={{cursor: 'pointer'}} underline="hover" to="undifined">
        Aha Study
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Join() {
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    // id, password, confirmuserid, confirmpassword 확인하는 구간
    const [userId, setUserId] = useState("");
    const [confirmUserId, setConfirmUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [register, setRegister] = useState(false);
    // id, password, confirmuserid, confirmpassword error부분 확인
    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    // userid form에 change가 있을 때마다 validation check를 하고 결과를 useriderror state에 저장한다.
    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{4,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) {
            setUserIdError(false);
            setRegister(false);
        }
        else setUserIdError(true);
        setUserId(e.target.value);

        
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const history = useHistory();
    const validation = () => {
        if(!userId) setUserIdError(true);
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!confirmUserId) setConfirmUserId(true);
        if(userId && password && confirmUserId && confirmPassword) return true;
        else return false;
    }
    const data = { id: userId, password: password };

    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    const onSubmit = (e) => {
        if(validation()) {
            instance.post('/auth/signup', data, {
                headers: {
                'Content-Type': 'application/json'
                }
              }
            ).then(function (response) {
                if(response.data.count == 1) {
                    history.push("/login");
                    history.go(1);
                    history.go(0);
                    alert(response.data.data.loginId + "님 안녕하세요")
                    
                }
            }).catch(function (error) {
                console.log(error)
            })
        }return;
    }
    const onIdSubmit = (e) => {
        instance.get(`/auth/user/${userId}` , userId , {
            headers: {
                'Content-Type': 'application/json'
                }
        })
             .then(function (response) {
                 alert(response.data.data);
                 setRegister(true);
                }).catch(function (error) {
                alert("아이디를 다시 입력하세요.")
                })
        
        return;
    }
    return (
        <BrowserRouter>
        <Route path="/register">
        <div className='register-main'>
            <div className='register-sub'>
            <Typography component="h1" variant="h5" style={{
                    width: "90px", 
                    fontFamily: 'CookieRun-Regular',
                    padding: "50px 0",
                    textAlign: "center",
                    margin: "0 auto",
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'warning.main' }} style={{marginLeft: '25px'}}>
                <DriveFileRenameOutlineRoundedIcon/>
          </Avatar>
            회원가입
          </Typography>
            <Container className="panel">
                <Form>
                    <div className='password-main'>
                    <Form.Group as={Row} className="mb-3" style={{width: "80%"}}>
                        <Col sm>
                            <Form.Control maxLength={20} placeholder="아이디" value={userId} onChange={onChangeUserId}/>
                            {userIdError && <div className="invalid-input">아이디는 4글자 이상 영어와 숫자를 사용해야 합니다. 예시 : AhaStudy52</div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" style={{width: "20%"}}>
                        <Col sm style={{width: "100%"}}>
                            <Button variant="warning" onClick={onIdSubmit} style={{width: "100%"}}>
                            중복확인
                        </Button>
                        </Col>
                    </Form.Group>
                    </div>
                    <div className="password-main">
                    <Form.Group as={Row} className="mb-3" style={{width: "100%"}}>
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} style={{width: '100%'}}/>
                            {passwordError && <div className="invalid-input">비밀번호는 8글자 이상입니다.</div>}
                        </Col>
                    </Form.Group>
                    <div>&nbsp;&nbsp;</div>
                    <Form.Group as={Row} className="mb-3" style={{width: "100%"}}>
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onChangeConfirmPassword} style={{width: '100%'}}/>
                            {confirmPasswordError && <div className="invalid-input">비밀번호가 맞지 않습니다.</div>}
                        </Col>
                    </Form.Group>
                    </div>
                    <br />
                    <div className="d-grid gap-1">
                    <Button variant="warning" onClick={onSubmit} disabled={!register} style={{width: '100%'}}>
                            회원가입
                        </Button>
                    </div>
                </Form>
                <br />
                <span className="text">계정을 가지고 계십니까?<Link to="/login" className="link" underline="hover" onClick={()=> {history.push("/login"); history.go(0)}} style={{cursor: 'pointer'}}>&nbsp;로그인</Link></span>
            </Container>
            </div>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            </div>
        </Route>
        </BrowserRouter>
    );
}

export default Join