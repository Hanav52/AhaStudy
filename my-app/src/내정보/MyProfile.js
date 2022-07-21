import { Box, Tabs } from "@mui/material";
import axios from "axios";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import BasicTabs from "./BasicTabs";

function MyProfile() {

  

  // html 부분
  return (
    <BrowserRouter>
        <Route path="/Profile">
          <div className="inner">
            <div className="MyProfile">
                <div className="profile-content">
                    <div className="MyProfileBody1">
                        <div className="leftImage">
                        
                        </div>
                        <div className="rightContent">
                            <div className="rightHeader">
                                <div className="writerName">
                                    <h3>아이디가 들어갑니다.</h3>
                                </div>
                                <div className="updateDelete">
                                    <button>수정</button>
                                    <button>탈퇴</button>
                                </div>
                            </div>
                            <div className="rightBodyFavorite">
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">좋아하는 분야</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                            </div>
                            <div className="rightFooterIntro">
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">자기소개</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MyProfileBody2">
                        <BasicTabs/>
                    </div>
                </div>
            </div>
          </div>
        </Route>
    </BrowserRouter>    
  );
}

export default MyProfile;
