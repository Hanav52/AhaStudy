import "../css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "../css/style.css";
import { RiBringForward } from "react-icons/ri";

function ProHeader() {
  const JsOnline = () => {
    window.open('http://www.sweethome3d.com/SweetHome3DJSOnline.jsp');
  }
  const JsGallery = () => {
    window.open('http://www.sweethome3d.com/gallery.jsp');
  }  

  const mail = () => {
    Swal.fire('wnsrl8329@gmail.com 으로 연락 주시면 감사합니다.');
  }



  return (
    <div>
        <header>
          <div className="inner">
            <div className="head-container">
              <div className="head-brand">
              <RiBringForward/>
                <Link to="/">MyInt</Link>
              </div>
              <ul className="nav justify-content-center">
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" onClick={JsGallery}>참고사이트</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" onClick={JsOnline}>도구</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" to="/submain">프로그램</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" onClick={mail}>문의</Link>
                </li>
              </ul>
              <button type="button" className="head-blog btn btn lg btn-warning">
                <Link to="/app">로그인</Link>
              </button>
            </div>
          </div>
        </header>
      </div>
  )
}

export default ProHeader;