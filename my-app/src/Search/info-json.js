import React, { useState } from "react";
import {  BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";

function SerarchBar({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="제목 입력"
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
          <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
        </button>
      </div>
    </>
  );
}



function App() {
  const [movie, setMovie] = useState([]);
  const [item, setItem] = useState("");
  const url = `http://bestinwoo.hopto.org:8080/post?boardId=1&keyword=${item}&page=0`;

  const searchItem = event => {
    setItem(event.target.value);
    console.log(item);
  };
  console.log(url);

  const fetchMovie = async () => {
    console.log("클릭");
    try {
      const response = await axios.get(url);
      const newMovieList = response.data.data.content;

      
      setMovie(newMovieList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>영화 검색</h2>
        <SerarchBar onClick={fetchMovie} onChange={searchItem}></SerarchBar>

        {movie.map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
                    <li class="class-card" key={id}>
                      <img alt="게시글" class="class-image" />
                      <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                        <div class="class-container">
                          <div class="class-skill">
                            <div class="class-type">작성자 : {writerLoginId}</div>
                            <div class="class-format">{"#"+tags}</div>
                          </div>
                          <div class="class-desc">
                            <div class="class-title">제목 : {title}</div>
                            <div class="class-detail">게시일 : {writeDate}</div>
                          </div>
                          <div class="class-skill">
                          <div class="class-detail">조회수 : {views}</div>
                          <div class="class-detail">댓글수 : {replyCount}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                ))}
      </header>
    </div>
  );
}

export default App;