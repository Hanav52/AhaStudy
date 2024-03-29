import React, { useEffect, useState } from "react";
import { getComments } from "./MyApiComment";
import { BrowserRouter, Link, useHistory } from "react-router-dom";

function MyComment() {
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
              {comments.map(({ postId, id, writeDate, writerLoginId, comment, postWriterLoginId }) => (
              <li className="class-card1" key={id}>
                  <Link to="/Detail" onClick={() => {
                    localStorage.setItem("writerLoginId", postWriterLoginId)
                    localStorage.setItem("postId", postId)
                    history.push("/Detail"); history.go(0)}}>
                      <div className="class-container">
                        <div className="class-skill">
                          <div className="class-type">작성자 : {writerLoginId}</div>
                          </div>
                          <div className="class-desc">
                            <div className="class-title">내용 : {comment}</div>
                            <div className="class-detail">작성일 : {writeDate}</div>
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

export default MyComment;