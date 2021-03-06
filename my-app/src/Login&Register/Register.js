import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RRegister.css'
import { Link, Typography } from '@mui/material';
import { Route } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://bestinu.atlassian.net/jira/software/projects/AHA/boards/1">
      Aha Study
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignUp() {
  window.addEventListener('load', () => {
    const forms = document.getElementsByClassName('validation-form');

    Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  function test() {
    let p1 = document.getElementById('passwordtest').value;
    let p2 = document.getElementById('passwordchecktest').value;

    if(p1.length < 8) {
            alert('입력한 글자가 8글자 이상이어야 합니다.');
            return false;
        }

        if( p1 != p2 ) {
          alert("비밀번호 불일치");
          return false;
        } else{
          alert("비밀번호가 일치합니다");
          return true;
        }
  }
  return (
    <Route path='/register'>
    <div className="container">
      <div className="input-form-backgroud row">
        <div className="input-form col-md-12 mx-auto">
          <h4 className="mb-3" >회원가입</h4>
          <form className="validation-form" noValidate>
            <div className="row g-2">
              <div className="form-floating col-md-10">
                <input
                  type="id"
                  className="form-control"
                  id="id"
                  placeholder="id"
                  required
                />
                <label htmlFor="floatingInput">&nbsp;아이디</label>
                <div className="invalid-feedback">아이디를 입력해주세요.</div>
                <div id="emailHelp" className="form-text">
                  영어와 숫자로 만들어주세요. 예시 : AhaStudy52
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="button"
                  className="btn btn-primary"
                  onClick={test}
                  defaultValue="중복확인"
                />
              </div>
            </div>
            <div className="mb-3"></div>

            <div className="row">
              <div className="form-floating col-md-6 mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="passwordtest"
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingPassword">&nbsp;&nbsp;비밀번호</label>
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
                <div id="passwordHelpBlock" className="form-text">
                  비밀번호는 8글자 이상 20글자 이하입니다.
                </div>
              </div>
              <div className="form-floating col-md-6 mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="passwordchecktest"
                  placeholder="password"
                  required
                />
                <label htmlFor="floatingPassword">
                  &nbsp;&nbsp;비밀번호 확인
                </label>
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="button"
                className="btn-primary btn btn"
                onClick={test}
                defaultValue="확인"
              />
            </div>
              

            <hr className="mb-4" />

            <div className="mb-4"></div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              가입 완료
            </button>
          </form>
        </div>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </div>
    </div>
    </Route>
  );
}

export default SignUp;
