import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import BodyForMenu from '../Body/Body1~6/BodyForMenu1';

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
  const pageTitle = `http://bestinwoo.hopto.org:8080/post`
  //localStorage.setItem("id", JSON.stringify(data));
  for(let i = 0; i < data.length; i++){
    localStorage.setItem(`category${i}`, data[i].id)
    nameList1 = data.map((name) => 
    <li className="nav-item fw-bold link-warning">
      <Link className="nav-link fw-bold link-warning" to={`/Posts${name.id}`} name={name.id}>{name.title}</Link>
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