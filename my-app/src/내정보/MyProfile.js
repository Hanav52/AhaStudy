import { Box, Tabs } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import BasicTabs from "./BasicTabs";
import normal from './normal.PNG'
import UpdateIntro from "./UpdateIntro";

function MyProfile() {
    // image 기본
    const [image, setImage] = useState(normal);

    // 프로필 가져오기
    const [detail, setDetail] = useState([]);
    //api instance 생성
    const instance = axios.create({
        baseURL: 'http://bestinwoo.hopto.org:8080/',
      });
    // api header 부분 토큰이 들어가있다.
        const config = {
        headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
        }};
    useEffect(()=> {
        try {
        instance.get(`/user/${localStorage.getItem("UserId")}`)
        .then(function(response) {
          console.log(response.data.data);
          setDetail(response.data.data)
        })} catch(ex){
          console.log("오류")
        }
      },[])
    // image api 부분
    const onSubmit = async (e) => {
        e.preventDefault();
        e.persist();
    
        let files = e.target.profile_files.files;
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("file", files[i]);
        }
        const token = window.localStorage.getItem("AccessToken");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const Title = window.localStorage.getItem("titlevalue");
        const TagStroage = window.localStorage.getItem("localTags");
        const ContentValue = window.localStorage.getItem("contentvalue");
        formData.append("title", Title);
        formData.append("content", ContentValue);
        formData.append("boardId", window.localStorage.getItem("category"));
        formData.append("tags", TagStroage);
      
    
        axios.post("http://bestinwoo.hopto.org:8080/post", formData, config)
        .then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        }).then(function() {
            // 항상 실행
        }); 
    
      };
  
  // html 부분
  return (
    <BrowserRouter>
        <Route path="/Profile">
          <div className="inner">
            <div className="MyProfile">
                <div className="profile-content">
                    <div className="MyProfileBody1">
                        <div className="leftImage">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <input
                            type="file"
                            style={{display:'none'}}
                            name="profile_files"
                            multiple="multiple"
                            accept='image/jpg,impge/png,image/jpeg'
                            />
                            <button type="submit">업로드</button>
                        </form>
                            <img className="lftimg" src={detail.profileImagePath === null ? image : detail.profileImagePath} alt="기본이미지"></img>
                        </div>
                        <div className="rightContent">
                            <div className="rightHeader">
                                <div className="writerName">
                                    <h3>{detail.loginId}</h3>
                                </div>
                                <div className="updateDelete">
                                    <button>탈퇴</button>
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
