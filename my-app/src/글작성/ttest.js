import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Survey = () => {
    
  const onSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    let files = e.target.profile_files.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    const token = window.localStorage.getItem("AccessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const Title = window.localStorage.getItem("titlevalue");
    const TagStroage = window.localStorage.getItem("localTags");
    const ContentValue = window.localStorage.getItem("contentvalue");
    formData.append("title", Title);
    formData.append("content", ContentValue);
    formData.append("boardId", 1);
    formData.append("tags", TagStroage);
  
    const config = {
      'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
      'Content-Type': 'multipart/form-data'
    };

    axios.post("http://bestinwoo.hopto.org:8080/post", formData, config);

  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="file"
        name="profile_files"
        multiple="multiple"
      />

      <button type="submit">제출</button>
    </form>
  );
};

export default Survey;