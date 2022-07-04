import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicCard from './test';

function Section() {
    return (
    <section>
      <div class="inner">
        <div class="roadmap-container">
          <div class="roadmap-title-container">
            <div class="roadmap-title">공무원</div>
            <div class="roadmap-title">더보기</div>
          </div>
          <ul class="class-list" data-position="0">
            <li class="class-card">
              <img src="https://www.fun-coding.org/style/images/blog.jpg" alt="잔재미코딩 블로그" class="class-image" />
              <a href="http://school.fastcampus.co.kr/blog/all/113/" target="_blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">학습방법</div>
                    <div class="class-format">블로그</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">IT는 배우는 방법을 익혀야합니다</div>
                    <div class="class-detail">비전공자가 IT를 배우는 전략</div>
                  </div>
                </div>
              </a>
            </li>
            <li class="class-card">
              <img src="https://www.fun-coding.org/style/images/broadIT3.png" alt="잔재미코딩 서적" class="class-image" />
              <a href="http://www.yes24.com/Product/Goods/60212672?OzSrank=1" target="_blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">출판서적</div>
                    <div class="class-format">서적</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">누구나 쓱 읽고, 싹 이해하는 IT 핵심 기술</div>
                    <div class="class-detail">입문자를 위한 IT 큰 그림 이해하기</div>
                  </div>
                </div>
              </a>
            </li>
            <BasicCard/>
            <li class="class-card">
              <img src="https://www.fun-coding.org/style/images/linuxbook.png" alt="잔재미코딩 서적" class="class-image" />
              <a href="http://www.yes24.com/Product/Goods/1461768?OzSrank=8" target="_blank">
                <div class="class-container">
                  <div class="class-skill">
                    <div class="class-type">출판서적</div>
                    <div class="class-format">서적</div>
                  </div>
                  <div class="class-desc">
                    <div class="class-title">리눅스 커널 프로그래밍</div>
                    <div class="class-detail">고급 개발자를 위한 리눅스 커널 분석과 개발</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    );
}

export default Section;
