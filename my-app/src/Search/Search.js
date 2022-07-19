import React, {useState, useEffect} from "react";
// Json 데이터를 받아 오기 위해 선언
import axios from 'axios'

const App = () => {
    //react satate hook
                            // hits는 가져올 api에서의 데이터
    const [data, setData] = useState([])  
                            // api 검색 키워드 (쿼리 스트링)
    const [query, setQuery] = useState('')
    
    // 랜더링이 업데이트가 되었을 때 effct 구문 실행
    // 리액트에서 랜더링
    useEffect(() => {
        // useEffect는 비동기적으로 실행된다.
        // query에 대한 검색 결과가 완료 되었는지를 검사할 변수 필요
        let completed = false;

        async function get() {
            const result = await axios(`http://bestinwoo.hopto.org:8080/post?boardId=1&keyword=${query}`)
            if(!completed) {
                setData(result.data.data.content);
            }
        }

        get()
        return () => {
            // 다른 비동기 작업이 또 실행되지 않도록
            completed = true
        }
       // 두 번째 파라미터 []는 리액트 랜더링 조건
       // 배열이 비어있다 -> 검사할 요소가 없다는 것
       // 즉 이펙트를 실행할지 안 할지를 검사하는 변수
       // 현재 상황에선 query가 바뀌는 시점이 된다.
    }, [query])
    return (
        // ui 랜더링
        <>
            <input value={query}
                onChange={e => setQuery(e.target.value)} />
            <ul>
                {data.map(item =>(  
                    <li key={item.objectId}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default App;
