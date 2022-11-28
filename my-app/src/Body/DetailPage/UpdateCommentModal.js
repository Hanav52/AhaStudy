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
        init={{
          width: 500,
          height: 500,
          placeholder: localStorage.getItem("comment"),
          menubar: false,
          deprecation_warnings: false,
          forced_root_block : false,
          force_br_newlines : true,
          force_p_newlines : false,
          toolbar: 'undo redo | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}></Editor>
    </>
  );
}
