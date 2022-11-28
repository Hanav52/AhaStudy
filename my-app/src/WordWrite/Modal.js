import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";
import TagBox from './TagBox';
import axios from "axios";
import { editorKey } from '../MyProfile/MyApi';


const TitleInput = styled.input`
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
`;

export default function App() {
  const editorRef = useRef(null);
  const [titlevalue, setTitleValue] = useState();
  const [contentvalue, setContentValue] = useState();
  window.localStorage.setItem("titlevalue", titlevalue);
  useEffect(()=> {
  })

  window.localStorage.setItem("contentvalue", contentvalue);
  // 제목, 태그, 내용, 이미지
  const log = (e) => {
    setContentValue(e.level.content);
  }
  return (
    <>
      <div>
        <TitleInput placeholder="제목을 입력하세요." calss="title" name='title' onChange={(event) => setTitleValue(event.target.value)}></TitleInput>
        <TagBox/>
        <p></p>
      </div>
      
      <Editor
        apiKey={editorKey}
        onChange={log}
        initialValue="글 작성시 위에있는 태그 포함과 Enter를 쳐주세요"
        init={{
          width: 500,
          height: 500,
          menubar: false,
          forced_root_block : false,
          force_br_newlines : true,
          force_p_newlines : false,
          deprecation_warnings: false,
          toolbar: 'undo redo | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}
