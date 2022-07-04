import "../css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer/Footer";
import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Swal from 'sweetalert2'
import Nav from "../NavBody/Nav";
import Section from "./section";

function RealMain() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <BrowserRouter>
        <Route exact path="/">
        <Nav/>
        <section>
          <div className="inner1">
            <div className="main1">
              <div className="frontmain">
              Aha Study는 자신이 원하는 유형의
              <br/>스터디를 할 수 있는 곳입니다.
              <br/><br/>
              </div>
            </div>
          </div>
        </section>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <section>
          <div className="inner3">
          <div className="program12-container">
            <div className="login-explain">
              <div className="login-maintitle">
                <div className="login-title">
                  자신이 원하는 유형의 스터디를 모집하거나 신청 해보세요.
                </div>
                <div className="login-subtitle">
                  로그인 후 사용할 수 있습니다.
                </div>
              </div>
              <div className="login-mainsubtitle">
              <Link to="/login"><button type="button" className="head-blog btn btn lg btn-warning">로그인</button></Link>
              <Link><button type="button" className="head-blog btn btn lg btn-outline-warning">글 작성하기</button></Link>
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