import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";
import TagBox from './TagBox';
import axios from "axios";

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const TitleInput = styled.input`
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
`;
const upload = () => {
    const formData = new FormData();
    const file = document.getElementById("file");
    formData.append("file", file.files[0]);
    axios.post("upload", formData, {
    headers: {
         "Content-Type" : "multipart/form-data" 
    }
  }).then(function(res){
  });
}
  const change= (e) => {
    console.log(e.target.value)
  } 
  return (
    <>
      <div>
        <TitleInput placeholder="제목을 입력하세요." />
        <TagBox/>
        <p></p>
      </div>
      
      <Editor
        apiKey='ddupi2ztkb24zhtcpzr2qfxgk6wmxllctw3ffxsycl85hqaf'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="글 작성시 태그를 꼭 포함시켜주세요"
        init={{
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
        }}
      />
      <div>
        <p></p>
        <input type="file" name="file"/>
      </div>
      <button onClick={log}>Log editor content</button>
    </>
  );
}
