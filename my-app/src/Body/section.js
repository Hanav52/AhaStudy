import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylemain.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Section() {
  // 최신글 데이터 저장
  const [data, setdata] = useState([])
  const [image, setImage] = useState([])

  //api instance 생성
  const instance = axios.create({
    baseURL: 'http://bestinwoo.hopto.org:8080/',
  });
   
  useEffect(() => {
    axios.get("http://bestinwoo.hopto.org:8080/board/recent", {
    headers: {
      'Content-Type': 'application/json'
      }
  })
    .then(function (response) {
      setdata(response.data.data)
      console.log(response.data.data)
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  },[])

  const result1 = data.filter(word => word.boardId === 1);
  const nameList1 = result1.map((name) => 
            <li className="class-card" key={name.postId}>
              <img src={"http://bestinwoo.hopto.org:8080/image/" + name.imagePath} alt="게시글" className="class-image" />
              <Link to="/Detail" onClick={() => {
                localStorage.setItem("writerLoginId", name.writerLoginId)
                localStorage.setItem("postId", name.postId)}}>
                <div className="class-container">
                  <div className="class-skill">
                    <div className="class-type">작성자 : {name.writerLoginId}</div>
                    <div className="class-format">{"#"+name.tags}</div>
                  </div>
                  <div className="class-desc">
                    <div className="class-title">제목 : {name.postTitle}</div>
                    <div className="class-detail">게시일 : {name.writeDate}</div>
                  </div>
                  <div className="class-skill">
                  <div className="class-detail">조회수 : {name.views}</div>
                  <div className="class-detail">댓글수 : {name.replyCount}</div>
                  </div>
                </div>
              </Link>
            </li>
  );
  const result2 = data.filter(word => word.boardId === 2);
  const nameList2 = result2.map((name) => 
            <li className="class-card" key={name.postId}>
              <img src={"http://bestinwoo.hopto.org:8080/image/" + name.imagePath} alt="게시글" className="class-image" />
              <Link to="/Detail" onClick={() => {
                localStorage.setItem("writerLoginId", name.writerLoginId)
                localStorage.setItem("postId", name.postId)}}>
                <div className="class-container">
                  <div className="class-skill">
                    <div className="class-type">작성자 : {name.writerLoginId}</div>
                    <div className="class-format">{"#"+name.tags}</div>
                  </div>
                  <div className="class-desc">
                    <div className="class-title">제목 : {name.postTitle}</div>
                    <div className="class-detail">게시일 : {name.writeDate}</div>
                  </div>
                  <div className="class-skill">
                  <div className="class-detail">조회수 : {name.views}</div>
                  <div className="class-detail">댓글수 : {name.replyCount}</div>
                  </div>
                </div>
              </Link>
            </li>
  );
  const result3 = data.filter(word => word.boardId === 3);
  const nameList3 = result3.map((name) => 
            <li className="class-card" key={name.postId}>
              <img src={"http://bestinwoo.hopto.org:8080/image/" + name.imagePath} alt="게시글" className="class-image" />
              <Link to="/Detail" onClick={() => {
                localStorage.setItem("writerLoginId", name.writerLoginId)
                localStorage.setItem("postId", name.postId)}}>
                <div className="class-container">
                  <div className="class-skill">
                    <div className="class-type">작성자 : {name.writerLoginId}</div>
                    <div className="class-format">{"#"+name.tags}</div>
                  </div>
                  <div className="class-desc">
                    <div className="class-title">제목 : {name.postTitle}</div>
                    <div className="class-detail">게시일 : {name.writeDate}</div>
                  </div>
                  <div className="class-skill">
                  <div className="class-detail">조회수 : {name.views}</div>
                  <div className="class-detail">댓글수 : {name.replyCount}</div>
                  </div>
                </div>
              </Link>
            </li>
  );
  const result4 = data.filter(word => word.boardId === 4);
  const nameList4 = result4.map((name) => 
          <li className="class-card" key={name.postId}>
            <img src={"http://bestinwoo.hopto.org:8080/image/" + name.imagePath} alt="게시글" className="class-image" />
            <Link to="/Detail" onClick={() => {
              localStorage.setItem("writerLoginId", name.writerLoginId)
              localStorage.setItem("postId", name.postId)}}>
              <div className="class-container">
                <div className="class-skill">
                  <div className="class-type">작성자 : {name.writerLoginId}</div>
                  <div className="class-format">{"#"+[name.tags]}</div>
                </div>
                <div className="class-desc">
                  <div className="class-title">제목 : {name.postTitle}</div>
                  <div className="class-detail">게시일 : {name.writeDate}</div>
                </div>
                <div className="class-skill">
                <div className="class-detail">조회수 : {name.views}</div>
                <div className="class-detail">댓글수 : {name.replyCount}</div>
                </div>
              </div>
            </Link>
          </li>
  );
  const result5 = data.filter(word => word.boardId === 5);
  const nameList5 = result5.map((name) => 
            <li className="class-card" key={name.postId}>
              <img src={name.imagePath} alt="게시글" className="class-image" />
              <Link to="/Detail" onClick={() => {
              localStorage.setItem("writerLoginId", name.writerLoginId)
              localStorage.setItem("postId", name.postId)}}>
                <div className="class-container">
                  <div className="class-skill">
                    <div className="class-type">{name.writerLoginId}</div>
                    <div className="class-format">{name.boardTitle}</div>
                  </div>
                  <div className="class-desc">
                    <div className="class-title">{name.postTitle}</div>
                    <div className="class-detail">{name.writeDate}</div>
                  </div>
                </div>
              </Link>
            </li>
  );
    
    return (
      <section>
        <div className="inner">
          <div className="roadmap-container">
              <div className="roadmap-title-container">
                <div className="roadmap-title">공무원</div>
                <div className="roadmap-title">더보기</div>
              </div>
              <ul className="class-list" data-position="0">
                 {nameList1}
              </ul>
          </div>
        </div>
        <div className="inner">
          <div className="roadmap-container">
              <div className="roadmap-title-container">
                <div className="roadmap-title">자격증</div>
                <div className="roadmap-title">더보기</div>
              </div>
              <ul className="class-list" data-position="0">
                 {nameList2}
              </ul>
          </div>
        </div>
        <div className="inner">
          <div className="roadmap-container">
              <div className="roadmap-title-container">
                <div className="roadmap-title">개발</div>
                <div className="roadmap-title">더보기</div>
              </div>
              <ul className="class-list" data-position="0">
                 {nameList3}
              </ul>
          </div>
        </div>
        <div className="inner">
          <div className="roadmap-container">
              <div className="roadmap-title-container">
                <div className="roadmap-title">외국어</div>
                <div className="roadmap-title">더보기</div>
              </div>
              <ul className="class-list" data-position="0">
                 {nameList4}
              </ul>
          </div>
        </div>
        <div className="inner">
          <div className="roadmap-container">
              <div className="roadmap-title-container">
                <div className="roadmap-title">면접</div>
                <div className="roadmap-title">더보기</div>
              </div>
              <ul className="class-list" data-position="0">
                 {nameList5}
              </ul>
          </div>
        </div>
      </section>
      
    );
}

export default Section;
