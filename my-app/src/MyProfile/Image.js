import { Button, createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { instance } from "./MyApi";
import normal from './normalimage.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ff7473',
    },
    three: {
      main: '#ffc107'
    },
    four: {
      main: '#fff'
    }
  },
});

const Image = () => {
  // useRef를 이용해 input태그에 접근한다.
  const imageInput = useRef();
  const [image, setImage] = useState("");
  const history = useHistory();

  // api header 부분 토큰이 들어가있다.
    const config = {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    'Content-Type': 'multipart/form-data'
    }};
  // image api 부분

  const onImgInputBtnClick = (e) => {
    e.preventDefault();
    imageInput.current.click();
  }

  const onImgChange = async (e) => {
    const fm = new FormData();
    fm.append("file", e.target.files[0]);
    instance.patch(`/user/img/${localStorage.getItem("UserId")}`, fm, config)
    .then(function (response) {
      localStorage.setItem("imageId",response.data.data)
      history.go(0);
    }).catch(function (error) {
    }).then(function() {
        // 항상 실행
    }); 
  }

  useEffect(()=> {
    instance.get(`/image/${localStorage.getItem("imageId")}`)
      .then(function (response) {
        setImage(response.request.responseURL)
        window.localStorage.setItem("URL", response.request.responseURL)
    })
  },[])

  // 프로필 가져오기
  const [detail, setDetail] = useState([]);

  useEffect(()=> {
      try {
      instance.get(`/user/${localStorage.getItem("UserId")}`)
      .then(function(response) {
        setDetail(response.data.data)
      })} catch(ex){
      }
    },[])

  return (
  	<>
      <input ref={imageInput} type="file" className="imgInput" id="logoImg" accept="image/*" name="file" onChange={onImgChange} multiple="multiple" style={{ display: "none" }}/>
      <ThemeProvider theme={theme}>
        <div className="Imageupload">
          <Button onClick={onImgInputBtnClick} style={{color: '#fff', fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal', }} color="three" variant="contained">이미지 업로드</Button>
        </div>
      </ThemeProvider>
      <img className="lftimg" src={detail.profileImagePath === null ? normal : image} alt="프로필이미지"></img>
	</>
  );
};

export default Image;