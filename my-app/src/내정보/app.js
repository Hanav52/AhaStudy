import React, { useRef } from "react";

const App = () => {
  // useRef를 이용해 input태그에 접근한다.
  const imageInput = useRef();
 console.log(imageInput)
  // 버튼클릭시 input태그에 클릭이벤트를 걸어준다. 
  const onCickImageUpload = () => {
    imageInput.current.click();
    console.log(imageInput.current)
  };
  // input태그는 display:"none" 을 이용해 안보이게 숨겨준다.
  return (
  	<>
      <input type="file" style={{ display: "none" }} ref={imageInput} />
      <button onClick={onCickImageUpload}>이미지업로드</button>
	</>
  );
};

export default App;