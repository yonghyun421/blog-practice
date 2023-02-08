import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 가방 추천",
    "남자 가방 추천",
  ]);

  let [date, setDate] = useState([
    "2월 17일 발행",
    "4월 21일 발행",
    "12월 25일 발행",
  ]);

  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  // 일반 변수는 갑자기 변경되면 Html에 자동으로 반영 안됨.
  // state는 갑자기 변경되면 state 쓰던 html은 자동 재렌더링됨.

  // 자주 변경될거 같은 html 부분은 state로 만들어 놓기.

  const clickLike = () => {
    setLike(like + 1);
  };

  const changeTitle = () => {
    setTitle(["여자 코트 추천", ...title]);
  };

  const changeOrder = () => {
    let newTitle = [...title];
    setTitle(newTitle.sort());
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={changeOrder}>정렬</button>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4 onClick={changeTitle}>
          {title[0]} <span onClick={clickLike}>👍🏻</span>
          {like}
        </h4>
        <p>{date[0]}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{date[1]}</p>
      </div>
      <div className="list">
        <h4 onClick={() => setModal(!modal)}>{title[2]}</h4>
        <p>{date[2]}</p>
      </div>
      {modal == true ? <Modal /> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
