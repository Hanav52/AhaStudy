import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

function Nav2() {

  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get(`http://bestinwoo.hopto.org:8080/board`)
    .then(function(response) {
      setData(response.data.data)
    }).then(function(error) {
    }) 
  },[])
  let nameList1;
  //localStorage.setItem("id", JSON.stringify(data));
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
          <Link className="nav-link fw-bold link-warning" to="/">문의</Link>
        </li>
    </ul>
    </div>
    </Route>
  );
}

export default Nav2;