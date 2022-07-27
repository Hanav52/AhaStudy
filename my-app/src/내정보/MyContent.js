import React, { useEffect, useState } from "react";
import { getComments } from "./MyApi";
import { BrowserRouter, Link } from "react-router-dom";

function MyContent() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(0);
  let timeInterver = '';

  const loadComments = async (page) => {
    try {
      const temp = await getComments(localStorage.getItem("UserId"), page, 9);
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
      <section>
        <div class="inner">
          <div class="roadmap-container">
            <ul class="class-list1" data-position="0">
              {comments.map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
              <li class="class-card1" key={id}>
                  <Link to="/Detail" onClick={() => {
                    localStorage.setItem("writerLoginId", writerLoginId)
                    localStorage.setItem("postId", id)}}>
                      <img src={"http://bestinwoo.hopto.org:8080/image/" + imagePath} alt="게시글" class="class-image" />
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </BrowserRouter>
    </>
  );
}

export default MyContent;