import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylemain.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Section() {

  const [data, setdata] = useState([])
   
  useEffect(() => {
    axios.get("http://bestinwoo.hopto.org:8080/board/recent", {
    headers: {
      'Content-Type': 'application/json'
      }
  })
    .then(function (response) {
      setdata(response.data.data)
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  },[])
  const result1 = data.filter(word => word.boardId === 1);
  const nameList1 = result1.map((name) => 
            <li class="class-card">
              <img src={name.imagePath} alt="게시글" class="class-image" />
              <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">{name.writerLoginId}</div>
                    <div class="class-format">{name.boardTitle}</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">{name.postTitle}</div>
                    <div class="class-detail">{name.writeDate}</div>
                  </div>
                </div>
              </a>
            </li>
  );
  const result2 = data.filter(word => word.boardId === 2);
  const nameList2 = result2.map((name) => 
            <li class="class-card">
              <img src={name.imagePath} alt="게시글" class="class-image" />
              <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">{name.writerLoginId}</div>
                    <div class="class-format">{name.boardTitle}</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">{name.postTitle}</div>
                    <div class="class-detail">{name.writeDate}</div>
                  </div>
                </div>
              </a>
            </li>
  );
  const result3 = data.filter(word => word.boardId === 3);
  const nameList3 = result3.map((name) => 
            <li class="class-card">
              <img src={name.imagePath} alt="게시글" class="class-image" />
              <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">{name.writerLoginId}</div>
                    <div class="class-format">{name.boardTitle}</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">{name.postTitle}</div>
                    <div class="class-detail">{name.writeDate}</div>
                  </div>
                </div>
              </a>
            </li>
  );
  const result4 = data.filter(word => word.boardId === 4);
  const nameList4 = result4.map((name) => 
            <li class="class-card">
              <img src={name.imagePath} alt="게시글" class="class-image" />
              <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">{name.writerLoginId}</div>
                    <div class="class-format">{name.boardTitle}</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">{name.postTitle}</div>
                    <div class="class-detail">{name.writeDate}</div>
                  </div>
                </div>
              </a>
            </li>
  );
  const result5 = data.filter(word => word.boardId === 5);
  const nameList5 = result5.map((name) => 
            <li class="class-card">
              <img src={name.imagePath} alt="게시글" class="class-image" />
              <a href="http://school.fastcampus.co.kr/blog/all/113/" target="blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">{name.writerLoginId}</div>
                    <div class="class-format">{name.boardTitle}</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">{name.postTitle}</div>
                    <div class="class-detail">{name.writeDate}</div>
                  </div>
                </div>
              </a>
            </li>
  );
    
    return (
      /// 메인페이지 화면을 map함수를 이용하여 메인페이지에서 상세페이지로 갈 수 있도록 한다.
  //     <div class="roadmap-container">
  //     <div class="roadmap-title-container">
  //         <div class="roadmap-title">{localStorage.getItem("title")}</div>
  //         <div class="roadmap-title"><CustomizedDialogs/></div>
  //     </div>
  //     <SerarchBar onClick={fetchMovie} onChange={searchItem} disabled={!state}></SerarchBar>
  //     <SearchTagBar onClick={fetchTag} onChange={searchTag} disabled={state}></SearchTagBar>
  //     <BodyBodySearch/>
  //     <ul class="class-list1" data-position="0">
  //     {posts.map(({ boardId, id, imagePath, replyCount, tags, title, views, writeDate, writerId, writerLoginId }) => (
  //         <li class="class-card1" key={id}>
  //           <img src={imgA} alt="게시글" class="class-image" />
  //           <Link to="/Detail" onClick={() => {
  //             localStorage.setItem("writerLoginId", writerLoginId)
  //             localStorage.setItem("postId", id)}}>
  //             <div class="class-container">
  //               <div class="class-skill">
  //                 <div class="class-type">작성자 : {writerLoginId}</div>
  //                 <div class="class-format">{"#"+tags}</div>
  //               </div>
  //               <div class="class-desc">
  //                 <div class="class-title">제목 : {title}</div>
  //                 <div class="class-detail">게시일 : {writeDate}</div>
  //               </div>
  //               <div class="class-skill">
  //               <div class="class-detail">조회수 : {views}</div>
  //               <div class="class-detail">댓글수 : {replyCount}</div>
  //               </div>
  //             </div>
  //           </Link>
  //         </li>
  //     ))}
  //     </ul>
  // </div>
      <section>
        <div class="inner">
          <div class="roadmap-container">
              <div class="roadmap-title-container">
                <div class="roadmap-title">공무원</div>
                <div class="roadmap-title">더보기</div>
              </div>
              <ul class="class-list" data-position="0">
                 {nameList1}
              </ul>
          </div>
        </div>
        <div class="inner">
          <div class="roadmap-container">
              <div class="roadmap-title-container">
                <div class="roadmap-title">자격증</div>
                <div class="roadmap-title">더보기</div>
              </div>
              <ul class="class-list" data-position="0">
                 {nameList2}
              </ul>
          </div>
        </div>
        <div class="inner">
          <div class="roadmap-container">
              <div class="roadmap-title-container">
                <div class="roadmap-title">개발</div>
                <div class="roadmap-title">더보기</div>
              </div>
              <ul class="class-list" data-position="0">
                 {nameList3}
              </ul>
          </div>
        </div>
        <div class="inner">
          <div class="roadmap-container">
              <div class="roadmap-title-container">
                <div class="roadmap-title">외국어</div>
                <div class="roadmap-title">더보기</div>
              </div>
              <ul class="class-list" data-position="0">
                 {nameList4}
              </ul>
          </div>
        </div>
        <div class="inner">
          <div class="roadmap-container">
              <div class="roadmap-title-container">
                <div class="roadmap-title">면접</div>
                <div class="roadmap-title">더보기</div>
              </div>
              <ul class="class-list" data-position="0">
                 {nameList5}
              </ul>
          </div>
        </div>
      </section>
      
    );
}

export default Section;
