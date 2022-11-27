import React, { useEffect } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
import { editorKey } from '../../MyProfile/MyApi';

export default function UpdateCommentModal() {
  // 내용
  const [CommentValue, setCommentValue] = useState();
  // 제목과 내용을 localStorage에 덮어서 저장한다.
  useEffect(()=> {
  window.localStorage.setItem("comment", CommentValue);
  },[CommentValue])
  // 제목, 태그, 내용을 보낸다.
  const log = (e) => {
    setCommentValue(e.level.content);
  }
  return (
    <>
      <Editor
        apiKey={editorKey}
        onChange={log}
        initialValue={localStorage.getItem("comment")}
        init={{
          height: 500,
          menubar: false,
          toolbar: '',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}></Editor>
    </>
  );
}
