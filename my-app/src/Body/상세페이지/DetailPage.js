import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UpdatePage from "./UpdatePage";
import moment from "moment";
import SaveComment from "./SaveComment";
import UpdateComment from "./UpdateComment";
import normal from '../../내정보/normal.png'
import { Button, createTheme, ThemeProvider } from "@mui/material";

const theme1 = createTheme({
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
      main: '#ffc107'
    }
  },
});

function DetailPage() {

  const history = useHistory();

  //api에서 받은 response.data.data 저장하기
  const [detail, setDetail] = useState([]);
  //api에서 받음 response.data.data.replies 저장하기
  const [detailComment, setDetailComment] = useState([]);

  //  /post에서 받아온 postId와 wirterLoginId 불러오기
  const postId = localStorage.getItem("postId");
  // 다시 저장하기
  window.localStorage.setItem("postId", postId);

  //api instance 생성
    const instance = axios.create({
        baseURL: 'http://bestinwoo.hopto.org:8080/',
      });
  // api header 부분 토큰이 들어가있다.
    const config = {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    }};
    
      useEffect(()=> {
        try {
        instance.get(`/post/${postId}`)
        .then(function(response) {
          setDetail(response.data.data);
          setDetailComment(response.data.data.replies)
          console.log(response.data.data.replies)
        })} catch(ex){
          console.log("오류")
        }
      },[])
      

      // 이미지 가져오기
      const [image, setImage] = useState("");
      // 프로필 가져오기
      const [comment, setComment] = useState([]);
      // 다른 사용자 이미지 가져오기
      const [image1, setImage1] = useState("");

      useEffect(()=> {
          try {
          instance.get(`/user/${localStorage.getItem("UserId")}`)
          .then(function(response) {
            setComment(response.data.data)
            setImage1(response.data.data.profileImagePath)
          })} catch(ex){
            console.log("오류")
          }
        },[])
      
      // useEffect(()=> {
      //   instance.get(`/image/${localStorage.getItem("imageId")}`)
      //     .then(function (response) {
      //       setImage(response.request.responseURL)
      //       console.log(response.request.responseURL)
      //       localStorage.setItem("URL", response.request.responseURL)
      //   })
      // },[])

  //로그인 유무 판단
  const visible = window.localStorage.getItem("State");
  // 게시글 본인 유무 판단
  const [ContentVisible, setContentVisible] = useState(false);
  // posts에서 클릭했을시 현재 사용자의 로그인 상태와 게시글이 본인 게시글인지 확인한다.
  const ContentDetail = async () => {
    try {
      // 로그인을 하지 않아도 그냥 댓글이 보이게 만든다.
      // 로그인 유무를 visible로 판단
        if(visible === "true") {
          // 게시글이 본인껀지 판단
            if(localStorage.getItem("LoginId") === localStorage.getItem("writerLoginId")) {
            console.log("본인글");
            setContentVisible(true);
            }
            else {
                console.log("본인이 아닙니다.");
                setContentVisible(false);
            }
        }
        else {
            console.log("로그인x");
            setContentVisible(false);
        }
    }
    catch(e) {
        console.log(e);
    }
}

  useEffect(()=>{
    ContentDetail();
  },[])

  // 게시글을 삭제한다.
  const DeContent = async () => {
        instance.delete(`/post/${postId}`, config)
        .then(function(response) {
          console.log(response)
        }).then(function(error) {
          console.log(error)
        })
  }
  // 게시글을 삭제한다.
  const DeComment = async () => {
    instance.delete(`/reply/${localStorage.getItem("CommentId")}`, config)
    .then(function(response) {
      console.log(response)
    }).then(function(error) {
      console.log(error)
    })
}
  const t2 = new Date();
// localstorage에서 데이터 받아오기
  const [LoginId, setLoginId] = useState();
  const [AccessToken, setAccessToken] = useState();
  const [AccessTokenExpiresIn, setAccessTokenExpiresIn] = useState();
  const [RefreshToken, setRefreshToken] = useState();
  const [RefreshTokenExpiresIn, setRefreshTokenExpiresIn] = useState();

// 날짜가 만료되면 액세스 토큰과 리프레쉬 토큰 api로 재발급받아 저장한다.
  useEffect(() => {
      setLoginId(window.localStorage.getItem("LoginId"));
      setAccessToken(window.localStorage.getItem("AccessToken"));
      setAccessTokenExpiresIn(window.localStorage.getItem("AccessTokenExpiresIn"));
      setRefreshToken(window.localStorage.getItem("RefreshToken")); 
      setRefreshTokenExpiresIn(window.localStorage.getItem("RefreshTokenExpiresIn"));
  },[]);

  
  const t1 = Number(AccessTokenExpiresIn);
  const diff2 = moment.duration(t1 - t2).asMilliseconds(); // 400000이하로 떨어지면
  const DeleteContent = () => {
    try {
      if(localStorage.getItem("LoginId") === localStorage.getItem("writerLoginId")) {
        alert("글 삭제하기");
        // 400000이하로 떨어지면
        if(diff2 < 400000) {
          axios.post("http://bestinwoo.hopto.org:8080/auth/reissue", {
            accessToken : AccessToken,
            refreshToken: RefreshToken
        })
        .then(function (response) {
          localStorage.removeItem("AccessToken");
          localStorage.removeItem("AccessTokenExpiresIn");
          localStorage.removeItem("RefreshToken");
          localStorage.removeItem("RefreshTokenExpiresIn");
          localStorage.setItem("AccessToken", response.data.accessToken);
          localStorage.setItem("AccessTokenExpiresIn", response.data.accessTokenExpiresIn);
          localStorage.setItem("RefreshToken", response.data.refreshToken);
          localStorage.setItem("RefreshTokenExpiresIn", response.data.refreshTokenExpiresIn);
          // 글 삭제
          DeContent();
          history.push("/post");
          history.go(0);
        }).then(function (error) {
          console.log(error)
        })
        } else {
          // 글 삭제
          DeContent();
          history.push("/post");
          history.go(0);
        }
      } else {
        console.log("로그인 만료, 로그아웃")
      }
  } catch(e) {
    console.log(e)
  }
  }
  const DeleteComment = () => {
    try {
      if(localStorage.getItem("LoginId") === localStorage.getItem("CommentLoginId")) {
        alert("글 삭제하기");
        // 400000이하로 떨어지면
        if(diff2 < 400000) {
          axios.post("http://bestinwoo.hopto.org:8080/auth/reissue", {
            accessToken : AccessToken,
            refreshToken: RefreshToken
        })
        .then(function (response) {
          localStorage.removeItem("AccessToken");
          localStorage.removeItem("AccessTokenExpiresIn");
          localStorage.removeItem("RefreshToken");
          localStorage.removeItem("RefreshTokenExpiresIn");
          localStorage.setItem("AccessToken", response.data.accessToken);
          localStorage.setItem("AccessTokenExpiresIn", response.data.accessTokenExpiresIn);
          localStorage.setItem("RefreshToken", response.data.refreshToken);
          localStorage.setItem("RefreshTokenExpiresIn", response.data.refreshTokenExpiresIn);
          // 글 삭제
          DeComment();
          history.go(0);
        }).then(function (error) {
          console.log(error)
        })
        } else {
          // 글 삭제
          DeComment();
          history.go(0);
        }
      } else {
        console.log("로그인 만료, 로그아웃")
      }
  } catch(e) {
    console.log(e)
  }
  }

  // 댓글 저장
  const OnSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    try {
      if(localStorage.getItem("LoginId")) {
        // 400000이하로 떨어지면
        if(diff2 < 400000) {
          axios.post("http://bestinwoo.hopto.org:8080/auth/reissue", {
            accessToken : AccessToken,
            refreshToken: RefreshToken
        })
        .then(function (response) {
          localStorage.removeItem("AccessToken");
          localStorage.removeItem("AccessTokenExpiresIn");
          localStorage.removeItem("RefreshToken");
          localStorage.removeItem("RefreshTokenExpiresIn");
          localStorage.setItem("AccessToken", response.data.accessToken);
          localStorage.setItem("AccessTokenExpiresIn", response.data.accessTokenExpiresIn);
          localStorage.setItem("RefreshToken", response.data.refreshToken);
          localStorage.setItem("RefreshTokenExpiresIn", response.data.refreshTokenExpiresIn);
          // 글 저장
          instance.post("/reply", {
            comment: localStorage.getItem("comment"),
            postId: postId
          }, config)
          .then(function(response) {
            console.log(response)
            history.go(0);
          })
        }).then(function (error) {
          console.log(error)
        })
        } else {
          instance.post("/reply", {
            comment: localStorage.getItem("comment"),
            postId: postId
          }, config)
          .then(function(response) {
            console.log(response)
            history.go(0);
          })
        }
      } else {
        console.log("로그인 만료, 로그아웃")
      }
  } catch(e) {
    console.log(e)
  }
  };
  
  // html 부분
  return (
    <BrowserRouter>
        <Route path="/Detail">
          <div className="inner">
            <div className="Detail-section">
              <div className="Detail-Side">
                <div className="Side-B">
                  <button className="Side-Back" onClick={()=> {history.push("/post"); history.go(0)}}>뒤로
                  </button>
                </div>
              </div>
              <div className="Detail-content">
                <div className="Detail-hole">
                  <div className="Detail-title">
                    <div className="Detail-titl-header">
                      <h1>{detail.title}</h1>
                    </div>
                    <div className="Detail-title-subheader">
                      <h5>{detail.writerLoginId}</h5>
                      <h6>&nbsp;· {detail.writeDate}</h6>
                      <div className="subheader-changedelete">
                      <ThemeProvider theme={theme1}>
                        {ContentVisible === true ? <><UpdatePage/><Button onClick={DeleteContent} color="secondary" style={{margin: '10px'}} variant="contained">삭제</Button></> : <div></div>}
                      </ThemeProvider>
                      </div>
                    </div>
                  </div>
                  <div className="Detail-title Ccontent">
                    <div className="Detail-body">
                      <h1>{detail.content}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Detail-comment">
              <div className="comment-content">
                <div className="answer-info">
                  <div className="answer-info-header">
                    <div className="header-ti">총 {detail.replyCount}개의 답변</div>
                  </div>
                  <div className="community-post-info">
                    <div className="cotent-body">
                      {/* 여기부분에 기존 댓글들을 불러온다. map함수 사용하기*/}
                      {detailComment.map((name) => 
                      <div className="answer--comment">
                        {localStorage.setItem("CommentId", name.id)}
                        {localStorage.setItem("CommentLoginId", name.writerLoginId)}
                      <div className="comment-card">
                        <div className="comment--header">
                          <img className="comment---image" src={name.writerLoginId === null ? normal : "http://bestinwoo.hopto.org:8080/image/" + name.writerImagePath} alt="댓글 이미지"></img>
                          <div className="flex-column">
                            <div className="flex-row">
                              <div className="comment----username">{name.writerLoginId === null ? "회원탈퇴한 사용자입니다." : name.writerLoginId}</div>
                            </div>
                            <span className="comment----update">{name.writeDate}</span>
                          </div>
                        </div>
                        <div className="comment--body">
                          {name.comment}
                          <div className="comment---features">
                            <div className="comment----delete">
                            <ThemeProvider theme={theme1}>
                              {localStorage.getItem("LoginId") === null ? (<div></div>) : (name.writerLoginId === localStorage.getItem("LoginId") ? <><UpdateComment/><Button onClick={DeleteComment} color="secondary">삭제</Button></> : <div></div>) }
                            </ThemeProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}  
                      {/* 로그인한 사용자면 댓글을 작성 할 수 있도록 만들어준다. */}
                      {visible === "true" ?
                      <div className="answer--comment">
                        <div className="comment-a">
                          <div className="commant-b">
                            <img className="commant-u-c" src={comment.profileImagePath === null ? normal : "http://bestinwoo.hopto.org:8080/image/" + image1} alt="댓글 이미지"></img>
                            <div className="flex-column">
                              <h5 className="comment----username">{localStorage.getItem("LoginId")}</h5>
                            </div>
                          </div>
                          <div className="comment-m-b">
                            <SaveComment/>
                          </div>
                          <div className="comment-footer">
                            <div className="commant-f-r">
                            <form onSubmit={(e) => OnSubmit(e)}>
                            <ThemeProvider theme={theme1}>
                              <Button type="submit" variant="contained" color="four" style={{color: '#fff'}}>답변 등록</Button>
                            </ThemeProvider>
                            </form>
                            </div>
                          </div>
                        </div>
                      </div> : 
                      <div className="answer--comment">
                        <div className="comment--new">
                          <p className="login-before">로그인 후, 질문 답변 작성이 가능합니다.</p>
                        </div>
                      </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
    
    </BrowserRouter>    
  );
}

export default DetailPage;
