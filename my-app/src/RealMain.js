import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Swal from 'sweetalert2'

function RealMain() {

  const mail = () => {
    Swal.fire('wnsrl8329@gmail.com 으로 연락 주시면 감사합니다.');
  }
  const login = () => {
    window.location.href="/app";
  }
  const program1 = () => {
    window.location.href="/submain";
  }

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <BrowserRouter>
        <Route exact path="/">
        <section>
          <div className="inner1">
            <div className="main1">
              <div className="frontmain">
              MyInt는 자신이 원하는 도면에
              <br/>인테리어 하는 곳입니다
              <br/><br/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="inner3">
          <div className="program1-1">
              <div className="program112">
                  <div className="pro-head">Js Online</div>
                  <div className="pro-body">Js Online은 프로그램, 웹에서 사용자가 원하는 도면을 가지고 인테리어를 할 수 있습니다.</div>
                  <div className="pro-button">
                    <button type="button" className="head-blog btn btn lg btn-outline-warning" onClick={program1}>더보기</button>
                  </div>
              </div>
              <div className="program112">
                <div className="pro-head">평면도</div>
                <div className="pro-body">9개의 평면도 중에 원하는 것을 선택하여 사용자가 원하는 인테리어를 편집 할 수 있습니다.</div>
                <div className="pro-button">
                  <button type="button" className="head-blog btn btn lg btn-outline-warning" onClick={program1}>더보기</button>
                </div>
              </div>
            </div>
            <div className="program1-1">
              <div className="program112">
                  <div className="pro-head">전체 이미지</div>
                  <div className="pro-body">화면 기준 왼쪽은 가구 편집 오른쪽 위는 평면도 오른쪽 아래는 3d로 사용자에게 제공된다.</div>
                  <div className="pro-button">
                    <button type="button" className="head-blog btn btn lg btn-outline-warning" onClick={program1}>더보기</button>
                  </div>
              </div>
              <div className="program112">
                <div className="pro-head">제작</div>
                <div className="pro-body">화면 기준 오른쪽에서 위쪽은 평면도에서 아랫쪽은 3d로 평면도를 조작하는 것을 나타냅니다.</div>
                <div className="pro-button">
                  <button type="button" className="head-blog btn btn lg btn-outline-warning" onClick={program1}>더보기</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="backcolor3">
          <div className="inner3">
          <div className="program1-container1">
            <div className="program1-explain">
              
            </div>
            <div className="program1-explain1">
              <div className="explain1">
              전체 이미지
              </div>
              <div className="explain2">
              화면 기준 왼쪽은 가구 편집 오른쪽 위는 평면도 오른쪽 아래는 3d로 사용자에게 제공된다.
              </div>
            </div>
          </div>
        </div>
        </section>
        <section>
          <div className="inner3">
          <div className="program12-container">
            <div className="login-explain">
              <div className="login-maintitle">
                <div className="login-title">
                  자신이 원하는 방 또는 집을 지금 당장 만들러 가보세요!
                </div>
                <div className="login-subtitle">
                  로그인 후 사용할 수 있습니다.
                </div>
              </div>
              <div className="login-mainsubtitle">
              <Link to="/app"><button type="button" className="head-blog btn btn lg btn-warning" onClick={login}>로그인</button></Link>
              <Link><button type="button" className="head-blog btn btn lg btn-outline-warning" onClick={mail}>문의하기</button></Link>
              </div>
            </div>
          </div>
          </div>
        </section>
        </Route>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default RealMain;