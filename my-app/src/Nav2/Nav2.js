import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Swal from 'sweetalert2'

function Nav2() {

  // 문의
  const mail = () => {
    Swal.fire("wnsrl8329@gmail.com으로 연락 주시면 감사하겠습니다.");
  }

  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: 'http://bestinwoo.hopto.org:8080/',
  });

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
      <Link className="nav-link fw-bold link-warning" to="/post" onClick={()=> {
        localStorage.setItem("category", name.id);
        localStorage.setItem("title", name.title);
      }}>{name.title}</Link>
    </li>
  );
  }
  return (
    <Route>
    <div className="inner">
    <ul className="nav justify-content-center">
        {nameList1}
        <li className="nav-item fw-bold link-warning">
          <Link className="nav-link fw-bold link-warning" to="/" onClick={mail}>문의</Link>
        </li>
    </ul>
    </div>
    </Route>
  );
}

export default Nav2;