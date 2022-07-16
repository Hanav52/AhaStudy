import React, { useEffect, useState } from "react";
import Box from "./Box";
import { getComments } from "./api";
import { BrowserRouter } from "react-router-dom";
import Nav1 from "../NavBody/Nav1";
import Nav2 from "../NavBody/Nav2";

function InfinityScroll() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
    let timeInterver = '';

  const loadComments = async (page) => {
    try {
      const temp = await getComments(page);
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
    <Nav1/>
    <Nav2/>
    <section>
      <div class="inner">
        <div class="roadmap-container">
          <div class="roadmap-title-container">
            <div class="roadmap-title">공무원</div>
            <div class="roadmap-title">글쓰기</div>
          </div>
          <ul class="class-list" data-position="0">
          
          </ul>
          {comments.filter((item) => (item.boardId === 1)).map((item) => (
            <Box boardId={item.boardId} 
                id={item.id} 
                title={item.title} 
                imagePath={item.imagePath} 
                writerId={item.writerLoginId} 
                replyCount={item.replyCount}      
                tags={item.tags}
                writeDate={item.writeDate}
                views={item.views}
                writerLoginId={item.writerLoginId}
                />
          ))}
        </div>
      </div>
    </section>
      
    </BrowserRouter>
    </>
  );
}

export default InfinityScroll;