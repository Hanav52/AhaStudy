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

export default function UpdateDetailModal() {
  // 제목
  const [titlevalue, setTitleValue] = useState();
  // 내용
  const [contentvalue, setContentValue] = useState();
  // 제목과 내용을 localStorage에 덮어서 저장한다.
  useEffect(()=> {
  window.localStorage.setItem("titlevalue", titlevalue);
  window.localStorage.setItem("contentvalue", contentvalue);
  },[contentvalue, titlevalue])

  // 제목, 태그, 내용을 보낸다.
  const log = (e) => {
    setContentValue(e.level.content);
  }

  //api에서 받은 response.data.data 저장하기
  const [detail, setDetail] = useState([]);

  //  /post에서 받아온 postId와 wirterLoginId 불러오기
  const postId = localStorage.getItem("postId");

  //api instance 생성
    const instance = axios.create({
        baseURL: 'http://bestinwoo.hopto.org:8080/',
      });

      useEffect(()=> {
        try {
        instance.get(`/post/${postId}`)
        .then(function(response) {
          console.log(response.data.data);
          setDetail(response.data.data);
        })} catch(ex){
          console.log("오류")
        }
      },[])
  // useEffect(()=>{
  //   ContentDetail();
  // },[])

  return (
    <>
      <div>
        <TitleInput placeholder={detail.title} calss="title" name={detail.title} onChange={(event) => setTitleValue(event.target.value)}>
        </TitleInput>
        <UpdateTagBox></UpdateTagBox>
        <p></p>
      </div> 
      <Editor
        apiKey='ddupi2ztkb24zhtcpzr2qfxgk6wmxllctw3ffxsycl85hqaf'
        onChange={log}
        initialValue={detail.content}
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
