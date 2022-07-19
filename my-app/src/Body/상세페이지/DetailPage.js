import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import App1 from "./Modal";

function DetailPage() {

  //로그인 유무 판단
  const [visible, setVisible] = useState(false);
  // useEffect(()=>{
  //   setVisible(window.localStorage.getItem("State"));
  // },[visible])
  

  //api에서 받은 response.data.data 저장하기
  const [detail, setDetail] = useState([]);

  // //  /post에서 받아온 postId 불러오기
  // const postId = localStorage.getItem("postId");

  // // api instance 생성
  //   const instance = axios.create({
  //       baseURL: 'http://bestinwoo.hopto.org:8080/',
  //     });
    
  //     useEffect(()=> {
  //       try {
  //       instance.get(`/post/${postId}`)
  //       .then(function(response) {
  //         console.log(response.data.data);
  //         setDetail(response.data.data);
  //       })} catch(ex){
  //         console.log("오류")
  //       }
  //     },[])


  // html 부분
  return (
    <BrowserRouter>
        <Route path="/Detail">
          <div className="inner">
            <div className="Detail-section">
              <div className="Detail-content">
                <div className="Detail-hole">
                  <div className="Detail-title">
                    <div className="Detail-titl-header">
                      <h1>{detail.title}안녕하세요</h1>
                    </div>
                    <div className="Detail-title-subheader">
                      <h5>{detail.writerLoginId}이준기</h5>
                      <h6>&nbsp;· {detail.writeDate}2022.07.19</h6>
                      <div className="subheader-changedelete">
                        {visible === true ? <><button>수정</button><button>삭제</button></> : <div></div>}
                      </div>
                    </div>
                  </div>
                  <div className="Detail-title Ccontent">
                    <div className="Detail-body">
                      <h1>{detail.content}내요내뇽내요ㅐㄴ요핸</h1>
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
                            <App1/>
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
