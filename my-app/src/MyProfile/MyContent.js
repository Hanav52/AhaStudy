import React, { useEffect, useState } from "react";
import { apiUrl, getComments } from "./MyApi";
import { BrowserRouter, Link, useHistory } from "react-router-dom";

function MyContent() {
  const history = useHistory();
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(0);
  let timeInterver = '';

  const loadComments = async (page) => {
    try {
      const temp = await getComments(localStorage.getItem("UserId"), page, 9);
      const tempComments = comments.concat(temp);
      setComments(tempComments);
    } catch (e) {
    }
  };

  useEffect(() => {
    loadComments(page);
  }, [page]);

  const scrollEvent = ()=>{
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
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
        <div className="inner">
          <div className="roadmap-container">
            <ul className="class-list1" data-position="0">
              {comments.map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
              <li className="class-card1" key={id}>
                  <Link to="/Detail" onClick={() => {
                    localStorage.setItem("writerLoginId", writerLoginId)
                    localStorage.setItem("postId", id)
                    history.push("/Detail"); history.go(0)}}>
                      <img src={`${apiUrl}/image/` + imagePath} alt="게시글" className="class-image2" />
                      <div className="class-container">
                        <div className="class-skill">
                          <div className="class-type">작성자 : {writerLoginId}</div>
                            <div className="class-format">{"#"+tags}</div>
                          </div>
                          <div className="class-desc">
                            <div className="class-title">제목 : {title}</div>
                            <div className="class-detail">게시일 : {writeDate}</div>
                          </div>
                          <div className="class-skill">
                          <div className="class-detail">조회수 : {views}</div>
                          <div className="class-detail">댓글수 : {replyCount}</div>
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