import 'bootstrap/dist/css/bootstrap.min.css';


function SideBar() {
  return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">AHa 공부하자</div>
            </a>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>내 정보</span></a>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                게시판
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>공무원</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록</h6>
                        <a className="collapse-item" href="blank0.html">경찰</a>
                        <a className="collapse-item" href="blank00.html">소방</a>
                        <a className="collapse-item" href="blank01.html">행정</a>
                        <a className="collapse-item" href="blank02.html">질문 & 답변</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>자격증</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록:</h6>
                        <a className="collapse-item" href="blank03.html">자격증</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>개발</span>
                </a>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록</h6>
                        <a className="collapse-item" href="blank04.html">디자인</a>
                        <a className="collapse-item" href="blank05.html">프론트</a>
                        <a className="collapse-item" href="blank06.html">백엔드</a>
                        <a className="collapse-item" href="blank07.html">질문 & 답변</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFour"
                    aria-expanded="true" aria-controls="collapseFour">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>외국어</span>
                </a>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">게시판 목록</h6>
                        <a className="collapse-item" href="blank08.html">중국어</a>
                        <a className="collapse-item" href="blank09.html">일본어</a>
                        <a className="collapse-item" href="blank10.html">영어</a>
                        <a className="collapse-item" href="blank11.html">질문 & 답변</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFive"
                    aria-expanded="true" aria-controls="collapseFive">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>면접</span>
                </a>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                      <h6 className="collapse-header">게시판 목록</h6>
                        <a className="collapse-item" href="blank12.html">대기업</a>
                        <a className="collapse-item" href="blank13.html">유학</a>
                        <a className="collapse-item" href="blank14.html">질문 & 답변</a>
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
}

export default SideBar;
