import { Button, createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import normal from './normal.png'

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
  console.log(imageInput)
  const [image, setImage] = useState("");

  //api instance 생성
  const instance = axios.create({
    baseURL: 'http://bestinwoo.hopto.org:8080/',
  });
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
    console.log(e.target.files[0])
    fm.append("file", e.target.files[0]);
    instance.patch(`/user/img/${localStorage.getItem("UserId")}`, fm, config)
    .then(function (response) {
      localStorage.setItem("imageId",response.data.data)
    }).catch(function (error) {
      console.log(error)
    }).then(function() {
        // 항상 실행
    }); 
  }

  useEffect(()=> {
    instance.get(`/image/${localStorage.getItem("imageId")}`)
      .then(function (response) {
        console.log(response.request.responseURL)
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
        console.log(response.data.data);
        setDetail(response.data.data)
      })} catch(ex){
        console.log("오류")
      }
    },[])

  // input태그는 display:"none" 을 이용해 안보이게 숨겨준다.
  return (
  	<>
      <input ref={imageInput} type="file" className="imgInput" id="logoImg" accept="image/*" name="file" onChange={onImgChange} multiple="multiple" style={{ display: "none" }}/>
      <ThemeProvider theme={theme}>
      <Button onClick={onImgInputBtnClick} style={{color: '#fff', fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}} color="three" variant="contained">이미지 업로드</Button>
      </ThemeProvider>
      <img className="lftimg" src={detail.profileImagePath === null ? normal : image} alt="프로필이미지"></img>
	</>
  );
};

export default Image;