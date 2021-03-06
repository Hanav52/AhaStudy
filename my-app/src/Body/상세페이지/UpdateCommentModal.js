import React, { useEffect } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";

export default function UpdateCommentModal() {
  // 내용
  const [CommentValue, setCommentValue] = useState();
  //setCommentValue(localStorage.getItem("comment"))
  // 제목과 내용을 localStorage에 덮어서 저장한다.
  useEffect(()=> {
  window.localStorage.setItem("comment", CommentValue);
  },[CommentValue])

  // 제목, 태그, 내용을 보낸다.
  const log = (e) => {
    setCommentValue(e.level.content);
  }
console.log(window.localStorage.getItem("comment"))
  return (
    <>
      <Editor
        apiKey='ddupi2ztkb24zhtcpzr2qfxgk6wmxllctw3ffxsycl85hqaf'
        onChange={log}
        initialValue={window.localStorage.getItem("comment")}
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
