import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

function Nav2() {

  function Category() {
    axios.get("url")
    .then(function (response) {
      console.log(response);
    }).then(function (error) {
      console.log(error);
    })
  }
  
  return (
    <Route>
    <div className="inner">
    <ul className="nav justify-content-center">
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning" to="/bodyformenu" onClick={Category}>공무원</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning" to="/bodyformenu" onClick={Category}>자격증</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning" to="/bodyformenu" onClick={Category}>개발</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning" to="/bodyformenu" onClick={Category}>외국어</Link>
        </li>
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning" to="/bodyformenu" onClick={Category}>문의</Link>
        </li>
    </ul>
    </div>
    </Route>
  );
}

export default Nav2;