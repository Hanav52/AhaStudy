import React, { useEffect } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";
import axios from "axios";
import { editorKey, instance } from './MyApi';

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

      // 회원정보 저장하기
      useEffect(()=> {
        try {
        instance.get(`/user/${localStorage.getItem("UserId")}`)
        .then(function(response) {
          setDetail(response.data.data);
        })} catch(ex){
          console.log("오류")
        }
      },[])

  return (
    <>
      <Editor
        apiKey={editorKey}
        onChange={log}
        initialValue={detail.introduce}
        init={{
          width: 500,
          height: 300,
          menubar: false,
          forced_root_block : false,
          force_br_newlines : true,
          force_p_newlines : false,
          deprecation_warnings: false,
          toolbar: 'undo redo | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}></Editor>
    </>
  );
}