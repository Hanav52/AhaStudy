import { Link } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar() {
  return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="index.js" underline="none">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">AHa 공부하자</div>
            </Link>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item active">
                <Link className="nav-link" href="Profile.js" underline="none">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>내 정보</span></Link>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                게시판
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" href="blank" data-toggle="collapse" data-target="#collapseTwo" underline="none"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>공무원</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록</h6>
                        <Link className="collapse-item" href="blank0.html">경찰</Link>
                        <Link className="collapse-item" href="blank00.html">소방</Link>
                        <Link className="collapse-item" href="blank01.html">행정</Link>
                        <Link className="collapse-item" href="blank02.html">질문 & 답변</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" href="blank" data-toggle="collapse" data-target="#collapseUtilities" underline="none"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>자격증</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록</h6>
                        <Link className="collapse-item" href="blank03.html">자격증</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" href="blank" data-toggle="collapse" data-target="#collapseThree" underline="none"
                    aria-expanded="true" aria-controls="collapseThree">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>개발</span>
                </Link>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록</h6>
                        <Link className="collapse-item" href="blank04.html">디자인</Link>
                        <Link className="collapse-item" href="blank05.html">프론트</Link>
                        <Link className="collapse-item" href="blank06.html">백엔드</Link>
                        <Link className="collapse-item" href="blank07.html">질문 & 답변</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" href="blank" data-toggle="collapse" data-target="#collapseFour" underline="none"
                    aria-expanded="true" aria-controls="collapseFour">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>외국어</span>
                </Link>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록</h6>
                        <Link className="collapse-item" href="blank08.html">중국어</Link>
                        <Link className="collapse-item" href="blank09.html">일본어</Link>
                        <Link className="collapse-item" href="blank10.html">영어</Link>
                        <Link className="collapse-item" href="blank11.html">질문 & 답변</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" href="blank" data-toggle="collapse" data-target="#collapseFive" underline="none"
                    aria-expanded="true" aria-controls="collapseFive">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>면접</span>
                </Link>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                      <h6 className="collapse-header">게시판 목록</h6>
                        <Link className="collapse-item" href="blank12.html">대기업</Link>
                        <Link className="collapse-item" href="blank13.html">유학</Link>
                        <Link className="collapse-item" href="blank14.html">질문 & 답변</Link>
                    </div>
                </div>
            </li>
            <hr class="sidebar-divider d-none d-md-block"/>

            {/* <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}
        </ul>
    );
    
}

export default SideBar;
