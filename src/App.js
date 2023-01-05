import { useState } from "react";
import "./App.css";

function App() {
  let post = "압구정 카레 맛집";
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "남자 가방 추천",
  ]);

  let [date, setDate] = useState([
    "2월 17일 발행",
    "4월 21일 발행",
    "12월 25일 발행",
  ]);

  // 일반 변수는 갑자기 변경되면 Html에 자동으로 반영 안됨.
  // state는 갑자기 변경되면 state 쓰던 html은 자동 재렌더링됨.

  // 자주 변경될거 같은 html 부분은 state로 만들어 놓기.

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>{date[0]}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{date[1]}</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{date[2]}</p>
      </div>
    </div>
  );
}

export default App;
