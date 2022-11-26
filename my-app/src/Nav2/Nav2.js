import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import { instance } from '../MyProfile/MyApi';

function Nav2() {
  // 문의
  const mail = () => {
    Swal.fire("wnsrl8329@gmail.com으로 연락 주시면 감사하겠습니다.");
  }
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(()=> {
    instance.get("/board")
    .then(function(response) {
      setData(response.data.data)
    }).then(function(error) {
    }) 
  },[])
  let nameList1;
  for(let i = 0; i < data.length; i++){
    nameList1 = data.map((name) => 
    <li className="nav-item fw-bold link-warning" key={name.id}>
      <Link className="nav-link fw-bold link-warning" onClick={()=> {
        localStorage.setItem("category", name.id);
        localStorage.setItem("title", name.title);
        history.push("/post"); history.go(0);
      }} style={{
        fontFamily: 'CookieRun-Regular', fontStyle: 'normal'
      }} to="undifined">{name.title}</Link>
    </li>
  );
  }
  return (
    <Route>
    <div className="inner">
    <ul className="nav justify-content-center">
        {nameList1}
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning" onClick={mail} style={{
            fontFamily: 'CookieRun-Regular', fontStyle: 'normal'
          }} to="undifined">문의</Link>
        </li>
    </ul>
    </div>
    </Route>
  );
}

export default Nav2;