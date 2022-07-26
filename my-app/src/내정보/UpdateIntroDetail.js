import React, { useEffect } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";
import axios from "axios";

export default function UpdateIntroDetail() {
  // 내용
  const [introValue, setIntroValue] = useState();
  // 자기소개를 localStorage에 덮어서 저장한다.
  useEffect(()=> {
  window.localStorage.setItem("introValue", introValue);
  },[introValue])

  // 자기소개 내용을 저장한다.
  const log = (e) => {
    setIntroValue(e.level.content);
  }

  //api에서 받은 response.data.data 저장하기
  const [detail, setDetail] = useState([]);

  //api instance 생성
    const instance = axios.create({
        baseURL: 'http://bestinwoo.hopto.org:8080/',
      });
      // 회원정보 저장하기
      useEffect(()=> {
        try {
        instance.get(`/user/${localStorage.getItem("UserId")}`)
        .then(function(response) {
          console.log(response.data.data);
          setDetail(response.data.data);
        })} catch(ex){
          console.log("오류")
        }
      },[])

  return (
    <>
      <Editor
        apiKey='ddupi2ztkb24zhtcpzr2qfxgk6wmxllctw3ffxsycl85hqaf'
        onChange={log}
        initialValue={detail.introduce}
        init={{
          forced_root_block : false,
          height: 300,
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
