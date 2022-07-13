import React, { useState } from "react"
import Axios from "axios"
import { useHistory } from "react-router-dom"

const CreateList = () => {
  const [files, setFiles] = useState([])
  const Title = window.localStorage.getItem("titlevalue");
  const TagStroage = window.localStorage.getItem("localTags");
  const ContentValue = window.localStorage.getItem("contentvalue")
  Axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
  const history = useHistory()

  let frm = new FormData();
let photoFile = document.getElementById("photo");
frm.append("photo", photoFile.files[0]);
Axios.post('https://domain/form-post-url', frm, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
.then((response) => {
  // 응답 처리
})
.catch((error) => {
  // 예외 처리
})

  const onCreate = () => {
    let formData = new FormData()

    formData.append("file", files[0])

    let variables = {
      title: Title,
      content: ContentValue,
      boardId: 1,
      tags: TagStroage,
      file: formData
    }
    
    Axios.post("http://bestinwoo.hopto.org:8080/post", variables, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    })
  }
  
  const onDrop = (files) => {
    setFiles(files)
  }

  return (
    <div>
      <form>
    <input type="file" name="photo" id="photo" />
    </form>
    </div>
  )
}
export default CreateList