import React, { useState } from "react"
import Axios from "axios"
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
      <button onDrop={onDrop} />
      <buttons size="large" onClick={onCreate}>생성하기</buttons>
    </div>
  )
}
export default CreateList