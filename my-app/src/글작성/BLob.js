import React, { useState } from "react"
import { Button } from "antd"
import Axios from "axios"
import UploadImage from "./Sections/UploadImage"
import { useHistory } from "react-router-dom"

const CreateList = () => {
  const [files, setFiles] = useState([])

  const history = useHistory()

  const onCreate = () => {
    let formData = new FormData()

    formData.append("file", files[0])

    let variables = [{
      title: "title",
      content: "content"
    }]

    formData.append("data", new Blob([JSON.stringify(variables)], {type: "application/json"}))
    
    Axios.post("/create/list", formData)
  }
  
  const onDrop = (files) => {
    setFiles(files)
  }

  return (
    <div>
      <UploadImage onDrop={onDrop} />
      <Button size="large" onClick={onCreate}>생성하기</Button>
    </div>
  )
}
export default CreateList