import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UpdateDetail from "./사용안함";
import App1 from "./사용안함";
import FormDialog from "./UpdatePage";
import UpdatePage from "./UpdatePage";
import App from "../../글작성/Modal";

function DetailPage() {

  const history = useHistory();

  //로그인 유무 판단
  const [visible, setVisible] = useState(true);
  // 게시글 본인 유무 판단
  const [ContentVisible, setContentVisible] = useState(false);
  // 댓글 본인 유무 판단
  const [CommentVisible, setCommentVisible] = useState(false)
  // posts에서 클릭했을시 현재 사용자의 로그인 상태와 게시글이 본인 게시글인지 확인한다.
  const ContentDetail = async () => {
    try {
      // 로그인 유무를 visible로 판단
        if(visible === true) {
          // 게시글이 본인껀지 판단
          //localStorage.getItem("LoginId") === localStorage.getItem("writerLoginId"
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
//   // posts에서 클릭했을시 현재 사용자의 로그인 상태와 댓글이 본인 댓글인지 확인한다.
//   const CommentDetail = async () => {
//     try {
//       // 로그인 유무를 visible로 판단
//         if(visible === true) {
//           // 게시글이 본인껀지 판단
//             if(localStorage.getItem("LoginId") === localStorage.getItem("writerLoginId")) {
//             console.log("본인글");
//             setContentVisible(true);
              
//             }
//             else {
//                 console.log("본인이 아닙니다.");
//                 setContentVisible(false);
//             }
//         }
//         else {
//             console.log("로그인x");
//             setContentVisible(false);
//         }
//     }
//     catch(e) {
//         console.log(e);
//     }
// }
  useEffect(()=>{
    ContentDetail();
    // CommentDetail();
  },[])

  //api에서 받은 response.data.data 저장하기
  const [detail, setDetail] = useState([]);

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
      'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
      };
    
      useEffect(()=> {
        try {
        instance.get(`/post/${postId}`)
        .then(function(response) {
          console.log(response.data.data);
          setDetail(response.data.data);
        })} catch(ex){
          console.log("오류")
        }
      },[])


  // html 부분
  return (
    <BrowserRouter>
        <Route path="/Detail">
          <div className="inner">
            <div className="Detail-section">
              <div className="Detail-Side">
                <div className="Side-B">
                  <button className="Side-Back" onClick={()=>history.go("/post")}>뒤로
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
                        {ContentVisible === true ? <><UpdatePage/><button>삭제</button></> : <div></div>}
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
                      <div className="answer--comment">
                        <div className="comment-card">
                          <div className="comment--header">
                            <img className="comment---image" src="blank.png"></img>
                            <div className="flex-column">
                              <div className="flex-row">
                                <div className="comment----username">댓글 작성자</div>
                              </div>
                              <span className="comment----update">댓글 작성 시간</span>
                            </div>
                          </div>
                          <div className="comment--body">
                            완료했습니다. 이게 댓글 내용입니다.
                            <div className="comment---features">
                              <div className="comment----delete">
                                {visible === true ? <><button>수정</button><button>삭제</button></> : <div></div>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {visible === true ?
                      <div className="answer--comment">
                        <div className="comment-a">
                          <div className="commant-b">
                            <img className="commant-u-c" src=""></img>
                            <div className="flex-column">
                              <h5 className="comment----username">현재 로그인한 사용자님, 답글을 남겨보세요!</h5>
                            </div>
                          </div>
                          <div className="comment-m-b">
                            <App/>
                          </div>
                          <div className="comment-footer">
                            <div className="commant-f-r">
                              <button className="commant-fb">
                                답변 등록
                              </button>
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
