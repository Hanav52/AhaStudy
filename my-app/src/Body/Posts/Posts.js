import { Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Nav from "../../NavBody/Nav";
import Pagination from "../Pagination";
import imgA from '../Posts/201845093_이준기.PNG';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(9);
  //const [ppage, setPPage] = useState("");
  //const [number, setNumber] = useState("");
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const params = useParams();
  const [Desc, setDesc] = useState("writeDate,desc");
  console.log(Desc)

  const url = "http://bestinwoo.hopto.org:8080/post";

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
              <Button onClick={() => setDesc("views,desc")}>조회순</Button>
              <Button onClick={() => setDesc("replyCount,desc")}>댓글순</Button>
            </ButtonGroup>
          </div>  
        </div>
    )}

    // const getPosts = async () => {
    //   const poosts = await axios.get(url,
    //     {params: {
    //       boardId: 1,
    //       // keyword: "un",
    //       page: page-1,
    //       size: limit,
    //       sort: Desc
    //     }})
    //   setPosts(poosts.data.data.content);
    //   localStorage.setItem("totalElements", poosts.data.data.totalElements);
    // };
    // useEffect(() => {
    //   getPosts();
    // }, []);



  useEffect ( () => {
     axios.get(url,
    {params: {
      boardId: localStorage.getItem("category"),
      // keyword: "un",
      page: page-1,
      size: limit,
      sort: Desc
    }})
          .then(function (response) {
            setPosts(response.data.data.content)
            localStorage.setItem("totalElements", response.data.data.totalElements);
            console.log(response.data.data)
          }).then(function(error) {
            console.log(error)
          })
  }, [Desc, page, limit]);
  return (
    <BrowserRouter>
      <Route path="/post">
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
                {posts.map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
                    <li class="class-card" key={id}>
                      <img src={imgA} alt="게시글" class="class-image" />
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
                </ul>
            </div>
            </div>
            </section>
            </div>
            <Pagination
              total={localStorage.getItem("totalElements")}
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

export default Posts;
