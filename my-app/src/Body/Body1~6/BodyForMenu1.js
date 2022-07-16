import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Footer/Footer';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Nav from '../../NavBody/Nav';
import axios from 'axios';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import '../../css/stylemain.css';
import { useEffect, useState } from 'react';
import Nav1 from '../../NavBody/Nav1';
import Nav2 from '../../NavBody/Nav2';

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

//console.log(localStorage.getItem("id"))
function BodyForMenu() {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get(`http://bestinwoo.hopto.org:8080/post?boardId=1`)
          .then(function (response) {
            setdata(response.data.data.content)
            console.log(response.data.data.content);
          }).then(function (error) {
         })
    },[])
    //const result1 = data.filter(word => word.boardId === 1);
    const nameList1 = data.map((name) => 
    <>
    <div>
            <li class="class-card">
              <img src={name.imagePath} alt="게시글" class="class-image" />
              <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">{name.writerLoginId}</div>
                    <div class="class-format">{name.boardTitle}</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">{name.postTitle}</div>
                    <div class="class-detail">{name.writeDate}</div>
                  </div>
                </div>
              </a>
            </li>
            </div>
    </>
    );
    return (
        <>
        <BrowserRouter>
        <Route path="/bodyformenu">
        <Nav1/>
        <Nav2/>
        <div className='bodybody'>
            <section>
            <div class="inner">
            <div class="roadmap-container">
                <div class="roadmap-title-container">
                    <div class="roadmap-title">공무원</div>
                    <div class="roadmap-title">글쓰기</div>
                </div>
                <BodyBodySearch/>
                <ul class="class-list" data-position="0">
                  {data.slice()}
                    {nameList1}
                </ul>
            </div>
            </div>
            </section>
        </div>
        <Footer/>
        </Route>
        </BrowserRouter>
        </>
        );
}

export default BodyForMenu;
