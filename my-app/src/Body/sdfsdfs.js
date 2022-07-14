import React, { useState } from "react";
import {  BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";

function SerarchBar({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="영화 이름 입력"
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
          <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
        </button>
      </div>
    </>
  );
}

function Result({ movie }) {
  var lis = [];
  for (var i = 0; i < movie.length; i++) {
    var item = movie[i];
    lis.push(
      <ol key={item.movieCd}>
        영화 제목 :{item.movieNm}
        <br />
        개봉일 : {item.openDt == "" ? "미정" : item.openDt}
      </ol>
    );
  }

  return (
    <>
      <div className="result">
        <div id="result_text">{lis}</div>
        <br />
      </div>
    </>
  );
}

function App() {
  const [movie, setMovie] = useState([]);
  const [item, setItem] = useState("");
  const key = process.env.REACT_APP_API_KEY;
  console.log(key);
  const query = encodeURIComponent(item);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${query}`;

  const searchItem = event => {
    setItem(event.target.value);
    console.log(item);
  };
  console.log(url);

  const fetchMovie = async () => {
    console.log("클릭");
    try {
      const response = await axios.get(url);
      //console.log(response);
      //console.log(response.data.movieListResult.movieList);
      const newMovieList = response.data.movieListResult.movieList;

      
      console.log(newMovieList);
      setMovie(newMovieList);
      console.log(movie);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>영화 검색</h2>
        <SerarchBar onClick={fetchMovie} onChange={searchItem}></SerarchBar>

        <Result movie={movie}></Result>
      </header>
    </div>
  );
}

export default App;