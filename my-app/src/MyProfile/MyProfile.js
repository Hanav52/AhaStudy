import { Box, Tabs } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import Image from "./Image";
import App from "./Image";
import BasicTabs from "./BasicTabs";
import UpdateIntro from "./UpdateIntro";
import AlertDialog from "./DeleteUser";
import DeleteUser from "./DeleteUser";
import { instance } from "./MyApi";

function MyProfile() {

    // 프로필 가져오기
    const [detail, setDetail] = useState([]);
    useEffect(()=> {
        try {
        instance.get(`/user/${localStorage.getItem("UserId")}`)
        .then(function(response) {
          setDetail(response.data.data)
        })} catch(ex){
          console.log("오류")
        }
      },[])
  
  // html 부분
  return (
    <BrowserRouter>
        <Route path="/Profile">
          <div className="inner">
            <div className="MyProfile">
                <div className="profile-content">
                    <div className="MyProfileBody1">
                        <div className="leftImage">
                            <Image/>
                        </div>
                        <div className="rightContent">
                            <div className="rightHeader">
                                <div className="writerName">
                                    <h3>{detail.loginId}</h3>
                                </div>
                                <div className="updateDelete">
                                    <DeleteUser/>
                                </div>
                            </div>
                            <div className="rightFooterIntro">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">자기소개</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" readOnly placeholder={detail.introduce}></textarea>
                                </div>
                                <UpdateIntro/>
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
