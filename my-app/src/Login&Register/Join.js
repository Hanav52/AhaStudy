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
import Popup from './Popup';

function Join() {
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    // id, password, confirmuserid, confirmpassword 확인하는 구간
    const [userId, setUserId] = useState("");
    const [confirmUserId, setConfirmUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // id, password, confirmuserid, confirmpassword error부분 확인
    const [userIdError, setUserIdError] = useState(false);
    const [confirmUserIdError, setConfirmUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    // userid form에 change가 있을 때마다 validation check를 하고 결과를 useriderror state에 저장한다.
    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{4,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
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
    
    // const onChangeUserName = (e) => {
    //     setUserNameError(false);
    //     setUserName(e.target.value)
    // };
    // const onChangeEmail = (e) => {
    //     const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    //     if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
    //     else setEmailError(true);
    //     setEmail(e.target.value);
    // };
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
    // axios.defaults.withCredentials = true;

    const onSubmit = (e) => {
        if(validation()) {
            axios.post('http://bestinwoo.hopto.org:8080/auth/signup', data, {
                headers: {
                'Content-Type': 'application/json'
                }
              }
            ).then(function (response) {
                console.log(response)
                if(response.data.count == 1) {
                    setPopup({
                        open: true,
                        title: "가입 축하드립니다.",
                        mesaage: "가입 완료!",
                        callback: function(){
                            history.push("/login");
                        }
                    })
                } else {
                     axios.get(`http://bestinwoo.hopto.org:8080/auth/user/${userId}`)
                         .then(function (response) {
                             console.log(response)
                         }).catch(function (error) {
                             console.log(error);
                         }).then(function() {
                             // 항상 실행
                         });
                    
                 }
            }).catch(function (error) {
                axios.get(`http://bestinwoo.hopto.org:8080/auth/user/${userId}`)
                         .then(function (response) {
                             console.log(response)
                         }).catch(function (error) {
                             console.log(error);
                         }).then(function() {
                             // 항상 실행
                         });
            }).then(function() {

            })
        
        }return;
        

        
        

    }
    const onIdSubmit = (e) => {
        if(userId === confirmUserId) return;
    }

    return (
        <BrowserRouter>
        <Route path="/register">
        <div>
        <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
            <Container className="panel">
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} placeholder="UserID" value={userId} onChange={onChangeUserId} />
                            {userIdError && <div className="invalid-input">아이디는 4글자 이상 영어와 숫자를 사용해야 합니다. 예시 : AhaStudy52</div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                            {passwordError && <div className="invalid-input">비밀번호는 8글자 이상입니다.</div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onChangeConfirmPassword} />
                            {confirmPasswordError && <div className="invalid-input">비밀번호가 맞지 않습니다.</div>}
                        </Col>
                    </Form.Group>
                    <br />
                    <div className="d-grid gap-1">
                        <Button variant="secondary" onClick={onSubmit}>
                            회원가입
                        </Button>
                    </div>
                </Form>
                <br />
                <span className="text">Have an account? <Link to="/login" className="link">Sign In</Link></span>
            </Container>
        </div>
        </Route>
        </BrowserRouter>
    );
}

export default Join