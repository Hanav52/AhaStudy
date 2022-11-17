import { Button, ButtonGroup, createTheme, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, Route, useHistory, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Pagination from "../Pagination";
import { getComments, instance1 } from "../Infinitiscroll/api1";
import {  BiSearchAlt2 } from "react-icons/bi";
import CustomizedDialogs from "../../WordWrite/Modaal";
import normal from './normaldesk.png'
import { apiUrl, instance } from "../../MyProfile/MyApi";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ff7473',
    },
    three: {
      main: '#ffa000'
    },
    four: {
      main: '#fff'
    }
  },
});

//제목 검색 부분
function SerarchBar({ onClick, onChange }) {
  return (
    <>
    <div className="inputHalf">
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
    </div>
      
    </>
  );
}
//태그 검색 부분
function SearchTagBar({ onClick, onChange }) {
  return (
    <>
    <div className="inputHalf1">
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
  const [item, setItem] = useState("");

  const searchItem = event => {
    setItem(event.target.value);
  };

  const fetchMovie = async () => {
    try {
      const response = await instance1.get("/post", {
        params: {
          boardId: localStorage.getItem("category"),
          keyword: item,
          size: limit,
          sort: Desc
        }
      })
      const newMovieList = response.data.data.content;
      setPosts(newMovieList);
      localStorage.setItem("totalElements", response.data.data.totalElements);
    } catch (e) {
      console.log(e);
    }
  };
  //태그 검색시 사용
  const [tag, setTag] = useState("");

  const searchTag = event => {
    setTag(event.target.value);
  };

  const fetchTag = async () => {
    try {
      const response = await instance1.get("/post", {
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
// 정렬부분
  function BodyBodySearch() {

    return(
        <div className='inner'>
          <div className='bodybodyheader'>
          <ThemeProvider theme={theme}>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={() => setDesc("writeDate,desc")} color="three" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>최신순</Button>
              <Button onClick={() => setDesc("views,desc")} color="three" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>조회순</Button>
              <Button onClick={() => setDesc("replyCount,desc")} color="three" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>댓글순</Button>
            </ButtonGroup>
          </ThemeProvider>
          </div>  
        </div>
    )
  }
  //api 호출부분
    const loadComments = async (page, Desc) => {
      try {
        const temp = await getComments(localStorage.getItem("category"), page-1, 9, Desc);
        setPosts(temp);
      } catch (e) {
        console.error(e);
      }
    };
    useEffect(() => {
      loadComments(page, Desc);
    }, [page, Desc]);
    const history = useHistory();

  return (
    <>
      <Route path="/post">
      <div className="bodybody"> 
      <section>
            <div class="inner">
            <div class="roadmap-container">
                <div class="roadmap-title-container">
                    <div class="roadmap-title">{localStorage.getItem("title")}</div>
                    <div class="roadmap-title"><CustomizedDialogs/></div>
                </div>
                <div className="search-double">
                <SerarchBar onClick={fetchMovie} onChange={searchItem} disabled={!state}></SerarchBar>
                <SearchTagBar onClick={fetchTag} onChange={searchTag} disabled={state}></SearchTagBar>
                </div>
                <BodyBodySearch/>
                <ul class="class-list1" data-position="0">
                {posts.map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
                    <li class="class-card1" key={id}>
                      <Link to="/Detail" onClick={() => {
                        localStorage.setItem("writerLoginId", writerLoginId)
                        localStorage.setItem("postId", id)
                        history.push("/Detail"); history.go(0)}}>
                        <div className="fillImage">
                        <img src={imagePath === undefined ? normal : `${apiUrl}/image/${imagePath}`} alt="게시글" class="class-image1" style={{
                          backgroundSize: "cover",
                        }}/>
                        </div>
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
    </>
  );
}

export default Posts;
