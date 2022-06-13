
import React , {useState} from 'react';
import './App.css';

function App() {
  let [글제목 , 글제목변경 ] = useState(['남자코트 추천', '인천대 학식', '내 꿈은 연봉1억 개발자']);
  let [books, booksChange] = useState({
    name : '올해 여름은 매우 더울것같음',
    day : '2022.06.11',
    info : '운전연습 해야됨'
  })

  // 정렬 버튼 클릭시 실행되는 함수(글자 정렬)
  function sortToString(){
    let copyData = [...글제목]; // 리액트 관용(기존 데이터를 깊은 복사를 통해 신규 데이터 생성)
    copyData.sort(); // 신규 데이터로 조작
    글제목변경(copyData); // 기존 데이터를 신규 데이터와 변경
  }
  console.log({books})
  return (
    <div className="App">
        <div className='black_nav'>
          <div>리액트 연습</div>
        </div>
        <button className='sortBtn' onClick={sortToString}>
          정렬
        </button>
        <div className='list'>
          <h3>{글제목[0]}</h3>
          <hr/>
        </div>
        <div className='list'>
          <h3>{글제목[1]}</h3>
          <hr/>
        </div>
        <div className='list'>
          <h3>{글제목[2]}</h3>
          <hr/>
        </div>

        <Modal books = {books}/>
    </div>
  );
}

function Modal(books){
  return (
    <div className='modal'>
      <h2>제목 : {books.books.name}</h2>
      <p>날짜 : {books.books.day}</p>
      <p>상세내용 : {books.books.info}</p>
    </div>
  )
}

export default App;
