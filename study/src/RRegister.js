import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ss.css';

function App() {
    window.addEventListener('load', () => {
        const forms = document.getElementsByclassNameName('validation-form');
  
        Array.prototype.filter.call(forms, (form) => {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
  
            form.classNameList.add('was-validated');
          }, false);
        });
      }, false);
      function test() {
        let p1 = document.getElementById('passwordtest').defaultValue;
        let p2 = document.getElementById('passwordchecktest').defaultValue;
  
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
    <div className="container">
    <div className="input-form-backgroud row">
      <div className="input-form col-md-12 mx-auto">
        <h4 className="mb-3">회원가입</h4>
        <form className="validation-form" novalidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name">이름</label>
              <input type="text" className="form-control" id="name" placeholder="" defaultValue="" required/>
              <div className="invalid-feedback">
                이름을 입력해주세요.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="nickname">아이디</label>
              <input type="text" className="form-control" id="nicknametest" placeholder="" defaultValue="" required/>
              <div className="invalid-feedback">
                아이디를 입력해주세요
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password">비밀번호</label>
            <input type="password" className="form-control" id="passwordtest" placeholder="" required/>
            <div className="invalid-feedback">
              비밀번호를 입력해주세요.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="passwordcheck">비밀번호 확인</label>
            <input type="password" className="form-control" id="passwordchecktest" placeholder="" required/>
            <div className="invalid-feedback">
              비밀번호를 입력해주세요.
            </div>
            <div className="mb-3"></div>
            <input type="button" className="btn-primary btn btn"onClick={test} defaultValue="비밀번호 확인"/>
          </div>

          <hr className="mb-4"/>
          <div className="mb-4"></div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">가입 완료</button>
        </form>
      </div>
    </div>
    <footer className="my-3 text-center text-small">
      <p className="mb-1">&copy; 2022 LP</p>
    </footer>
  </div>
  );
}

export default App;
