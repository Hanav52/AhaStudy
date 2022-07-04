import "../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

function Nav2() {
  
  return (
    <div className="inner">
    <ul className="nav justify-content-center">
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning">공무원</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning">자격증</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning">개발</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning">외국어</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning">문의</Link>
        </li>
    </ul>
    </div>
  );
}

export default Nav2;