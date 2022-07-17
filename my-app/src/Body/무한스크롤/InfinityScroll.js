import React, { useEffect, useState } from "react";
import { getComments } from "./api1";
import { BrowserRouter } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import Nav from "../../NavBody/Nav";

function InfinityScroll() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(0);
  const [Desc, setDesc] = useState("writeDate,desc");
    let timeInterver = '';
  console.log(localStorage.getItem("category"))
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
              <p></p>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => setDesc("writeDate,desc")}>최신순</Button>
                <Button onClick={() => setDesc("writeDate,asc")}>조회순</Button>
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
    <Nav/>
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
                <BodyBodySearch/>
                <ul class="class-list" data-position="0">
                {comments.map(({boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId}) => (
        <li class="class-card" key={id}>
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
      {/*  */}
      </BrowserRouter>
    </>
  );
}

export default InfinityScroll;