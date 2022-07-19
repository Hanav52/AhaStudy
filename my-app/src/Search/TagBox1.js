import axios from "axios";
import React, { useState, useCallback } from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`
  width: 100%;
  padding-top: 1rem;

  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;

  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    color: white;
    font-weight: bold;
    &:hover {
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const url = "http://bestinwoo.hopto.org:8080/post";
  const [page, setPage] = useState(1);
  const [Desc, setDesc] = useState("writeDate,desc");
  const [posts, setPosts] = useState([]);
  const abc = "소방";


  const insertTag = useCallback(
    tag => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      setLocalTags([...localTags, tag]);
    },
    [localTags],
  );

  const onRemove = useCallback(
    tag => {
      setLocalTags(localTags.filter(t => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
      setInput(''); // input 초기화
      axios.get(url, {
          params: {
            boardId: localStorage.getItem("category"),
            tagName: localStorage.getItem("localTags1"),
            page: page-1,
            size: 9,
            sort: Desc
          }
        }).then(function(response){
          const newMovieList = response.data.data.content;
          setPosts(newMovieList);
        }).then(function(error){
          console.log(error)
        })
    },
    [input, insertTag],
  );
    window.localStorage.setItem("localTags1",localTags);
    console.log(localStorage.getItem("localTags1"));
  return (
    <TagBoxBlock>
      <TagForm onSubmit={onSubmit}>
        <input 
          placeholder="태그를 입력하세요." 
          value={input} 
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;