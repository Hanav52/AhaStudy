import React, { useEffect } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";
import axios from "axios";
import UpdateTagBox from './UpdateTagBox';


const TitleInput = styled.input`
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
`;

export default function SaveComment() {
  // 댓글 내용
  const [comment, setComment] = useState();
  // 제목과 내용을 localStorage에 덮어서 저장한다.
  useEffect(()=> {
  window.localStorage.setItem("comment", comment);
  },[comment])

  // 제목, 태그, 내용을 보낸다.
  const log = (e) => {
    setComment(e.level.content);
  }

  // //  /post에서 받아온 postId와 wirterLoginId 불러오기
  // const postId = localStorage.getItem("postId");

  // //api instance 생성
  //   const instance = axios.create({
  //       baseURL: 'http://bestinwoo.hopto.org:8080/',
  //     });
  // // api header 부분 토큰이 들어가있다.
  // const config = {
  //   headers: {
  //   'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
  // }};

  
  // // // useEffect(()=>{
  // // //   ContentDetail();
  // // // },[])

  return (
    <>
      <Editor
        apiKey='ddupi2ztkb24zhtcpzr2qfxgk6wmxllctw3ffxsycl85hqaf'
        onChange={log}
        initialValue="글 작성시 위에있는 태그와 제목을 꼭 적어주세요"
        init={{
          forced_root_block : false,
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}></Editor>
    </>
  );
}
