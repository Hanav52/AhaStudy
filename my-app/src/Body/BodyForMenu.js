import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Nav from '../NavBody/Nav';
import axios from 'axios';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import '../css/stylemain.css';

function BodyBodySearch() {
    return(
        <div className='inner'>
            <div className='bodybodyheader'>
            <input
                type="search"
                className="formSearch"
                placeholder="영화 이름 입력"
            />
            
            <input
                type="search"
                className="formSearch"
                placeholder="영화 이름 입력"
            />
            </div>
        </div>
    )
}
function BodyBodyBody() {
    return(
    <div className='inner'>
         여기는 게시글입니다.
    </div>
    )
}

function BodyForMenu() {
    const config = {
        'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
      };
    const token = window.localStorage.getItem("AccessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.get("http://bestinwoo.hopto.org:8080/board", config)
    .then(function (response) {
        console.log(response.data)
    }).then(function (error) {
        console.log(error)
    })
    const data = () => {
    }
    

    return (
        <>
        <BrowserRouter>
        <Route path="/bodyformenu">
        <Nav/>
        <div className='bodybody'>
            <BodyBodySearch/>
            <BodyBodyBody/>
        </div>
        <Footer/>
        </Route>
        </BrowserRouter>
        </>
        );
}

export default BodyForMenu;
