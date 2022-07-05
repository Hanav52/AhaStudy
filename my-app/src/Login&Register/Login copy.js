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

function SignIn() {
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
  return (
    <div className="container">
      <div className="input-form-backgroud row">
        <div className="input-form col-md-12 mx-auto">
          <h4 className="mb-3" >로그인</h4>
          <form className="validation-form" noValidate>
              <div className="form-floating mb-3">
                <input
                  type="id"
                  className="form-control"
                  id="id"
                  placeholder="id"
                  required
                />
                <label htmlFor="floatingInput">&nbsp;아이디</label>
                <div className="invalid-feedback">아이디를 입력해주세요.</div>
              </div>
            <div className="mb-3"></div>

            <div className="row">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="passwordtest"
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingPassword">&nbsp;&nbsp;비밀번호</label>
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>
            </div>

            <hr className="mb-4" />

            <div className="mb-4"></div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              로그인
            </button>
          </form>
        </div>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </div>
    </div>
  );
}

export default SignIn;
