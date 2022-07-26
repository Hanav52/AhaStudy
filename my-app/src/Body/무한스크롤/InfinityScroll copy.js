import React, { useEffect, useState } from "react";
import { getComments } from "./api1";
import { BrowserRouter } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import {  BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";


//제목 검색 부분
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
//태그 검색 부분
function SearchTagBar({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="태그 입력"
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
          <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
        </button>
      </div>
    </>
  );
}


function InfinityScroll() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(0);
  const [Desc, setDesc] = useState("writeDate,desc");
  let timeInterver = '';

  //검색 호출시 사용
  const url = "http://bestinwoo.hopto.org:8080/post";
  const [item, setItem] = useState("");

  const searchItem = event => {
    setItem(event.target.value);
  };
  const fetchMovie = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          boardId: localStorage.getItem("category"),
          keyword: item,
          size: 9,
          sort: Desc
        }
      })
      setComments();
      const newMovieList = response.data.data.content;
      setComments(newMovieList);
      localStorage.setItem("totalElements", response.data.data.totalElements);
      
    } catch (e) {
      console.log(e);
    }
  };
  //태그 검색시 사용
  const [tag, setTag] = useState("");

  const searchTag = event => {
    setTag(event.target.value);
    console.log(tag);
  };

  const fetchTag = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          boardId: localStorage.getItem("category"),
          tagName: tag,
          page: page-1,
          size: 9,
          sort: Desc
        }
      })
      const newMovieList = response.data.data.content;
      setComments(newMovieList);
      localStorage.setItem("totalElements", response.data.data.totalElements);
      
    } catch (e) {
      console.log(e);
    }
  };
  
    function BodyBodySearch() {
      return(
          <div className='inner'>
            <div className='bodybodyheader'>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => setDesc("writeDate,desc")}>최신순</Button>
                <Button onClick={() => setDesc("views,desc")}>조회순</Button>
                <Button onClick={() => setDesc("replyCount,desc")}>댓글순</Button>
              </ButtonGroup>
            </div>  
          </div>
      )}

  const loadComments = async (page) => {
    try {
      const temp = await getComments(localStorage.getItem("category"), page, 9, Desc);
      const tempComments = comments.concat(temp);
      setComments(tempComments);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadComments(page);
  }, [page]);

  const scrollEvent = ()=>{
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log(scrollTop)
    if (scrollTop + clientHeight >= scrollHeight - 950) {
      setPage(page + 1);
    }
  }
  
  const handleScroll = () => {
    clearTimeout(timeInterver);
    timeInterver = setTimeout(scrollEvent, 300)
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
    <BrowserRouter>
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
                    <div class="roadmap-title">{localStorage.getItem("title")}</div>
                    <div class="roadmap-title">글쓰기</div>
                </div>
                <SerarchBar onClick={fetchMovie} onChange={searchItem}></SerarchBar>
                <SearchTagBar onClick={fetchTag} onChange={searchTag}></SearchTagBar>
                <BodyBodySearch/>
                <ul class="class-list1" data-position="0">
                {comments.map(({boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId}) => (
        <li class="class-card1" key={boardId}>
        <img alt="게시글" class="class-image" />
        <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
          <div class="class-container">
            <div class="class-skill">
              <div class="class-type">작성자 : {writerLoginId}</div>
              <div class="class-format">#{tags}</div>
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
                </ul>
            </div>
            </div>
            </section>
            </div>
      </BrowserRouter>
    </>
  );
}

export default InfinityScroll;