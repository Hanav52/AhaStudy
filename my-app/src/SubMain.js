import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { BrowserRouter as  Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function SubMain() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <BrowserRouter>
        <Route path="submain">
            <section>
            <div className="inner">
            <div className="program1-container">
                <div className="program1-explain">
                </div>
                <div className="program1-explain1">
                <div className="explain1">
                    전체화면
                </div>
                <div className="explain2">
                    화면 기준 왼쪽은 가구 편집 오른쪽 위는 평면도 오른쪽 아래는 3d로 사용자에게 제공된다.
                </div>
                </div>
            </div>
            </div>
            </section>
            <section>
            <div className="inner">
            <div className="program2-container">
                <div className="program2-explain2">
                <div className="explain1">
                    평면도
                </div>
                <div className="explain2">
                    9개의 평면도 중에 빈 도면과 준비된 도면 중에서 원하는 것을 선택하여<br/> 사용자가 원하는 인테리어를 편집 할 수 있습니다.
                </div>
                </div>
                <div className="program2-explain">
                </div>
            </div>
            </div>
            </section>
            <section>
            <div className="inner">
            <div className="program3-container">
                <div className="program3-explain">
                </div>
                <div className="program1-explain1">
                <div className="explain1">
                    가구 메뉴
                </div>
                <div className="explain2">
                    가구를 선택하거나 드래그 하여 원하는 곳으로 도면에다가 옮겨 줍니다.<br/>
                    밑에 있는 Visible을 사용하여 가구를 보이거나 숨길 수 있습니다.
                </div>
                </div>
            </div>
            </div>
            </section>
            <section>
            <div className="inner">
            <div className="program2-container">
                <div className="program2-explain2">
                <div className="explain1">
                    도면과 3D도면
                </div>
                <div className="explain2">
                    위쪽에 보이는 도면은 가구 메뉴에서 가구를 가져다가 놓을 수 있는 공간입니다.<br/>
                    밑에 있는 3D도면은 위쪽에서 만든 벽과 가구를 3D로 사용자에게 시각화하여 보여줍니다.
                </div>
                </div>
                <div className="program4-explain">
                </div>
            </div>
            </div>
            </section>
            </Route>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default SubMain;