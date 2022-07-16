import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import Nav1 from "../../NavBody/Nav1";
import Nav2 from "../../NavBody/Nav2";
import Pagination from "../Pagination";
import imgA from '../Posts/201845093_이준기.PNG';

function Posts4() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get(`http://bestinwoo.hopto.org:8080/post?boardId=4&keywords=&page=${offset}&size=${limit}&sort=writeDate,desc`)
          .then(function (response) {
            setPosts(response.data.data.content)
            console.log(response.data.data.content)
          }).then(function (error) {
         })
  }, []);

  return (
    <BrowserRouter>
    <Route path="/Posts4">
      <Nav1/>
      <Nav2/>
      <div className="bodybody">
      {/* <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label> */}
      <section>
            <div class="inner">
            <div class="roadmap-container">
                <div class="roadmap-title-container">
                    <div class="roadmap-title">공무원</div>
                    <div class="roadmap-title">글쓰기</div>
                </div>
                <ul class="class-list" data-position="0">
                {posts.slice(offset, offset + limit).map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
                    <li class="class-card" key={boardId}>
                      <img src={imgA} alt="게시글" class="class-image" />
                      <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                        <div class="class-container">
                          <div class="class-skill">
                            <div class="class-type">{writerLoginId}</div>
                            <div class="class-format">{tags}</div>
                          </div>
                          <div class="class-desc">
                            <div class="class-title">{title}</div>
                            <div class="class-detail">{writeDate}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            </section>
            </div>
        
            <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      <footer>
        
        <Footer/>
      </footer>
      </Route>
    </BrowserRouter>
  );
}

export default Posts4;
