import { Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Nav from "../../NavBody/Nav";
import Pagination from "../Pagination";
import imgA from '../Posts/201845093_이준기.PNG';
import { getComments } from "../무한스크롤/api1";
import {  BiSearchAlt2 } from "react-icons/bi";
import CustomizedDialogs from "../../글작성/Modaal";

//제목 검색 부분
function SerarchBar({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="search"
          className="form-control"
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
          className="form-control"
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

function Posts() {
  const [state, setState] = useState("false");
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const params = useParams();
  const [Desc, setDesc] = useState("writeDate,desc");

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
          size: limit,
          sort: Desc
        }
      })
      const newMovieList = response.data.data.content;
      setPosts(newMovieList);
      console.log(posts);
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
  console.log(url);

  const fetchTag = async () => {
    console.log("클릭");
    try {
      const response = await axios.get(url, {
        params: {
          boardId: localStorage.getItem("category"),
          tagName: tag,
          page: page-1,
          size: limit,
          sort: Desc
        }
      })
      const newMovieList = response.data.data.content;
      localStorage.setItem("totalElements", response.data.data.totalElements);
      setPosts(newMovieList);
      
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
    )
  }
  //api 호출부분
    const loadComments = async (page, Desc) => {
      try {
        const temp = await getComments(localStorage.getItem("category"), page-1, 9, Desc);
        console.log(temp)
        setPosts(temp);
      } catch (e) {
        console.error(e);
      }
    };
    useEffect(() => {
      loadComments(page, Desc);
    }, [page, Desc]);

  return (
    <BrowserRouter>
      <Route path="/post">
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
                    <div class="roadmap-title"><CustomizedDialogs/></div>
                </div>
                <SerarchBar onClick={fetchMovie} onChange={searchItem} disabled={!state}></SerarchBar>
                <SearchTagBar onClick={fetchTag} onChange={searchTag} disabled={state}></SearchTagBar>
                <BodyBodySearch/>
                <ul class="class-list1" data-position="0">
                {posts.map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
                    <li class="class-card1" key={id}>
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
