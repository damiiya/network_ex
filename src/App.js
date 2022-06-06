import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  React.useEffect(() => {
    // [0] 객체 만들기 + 요청 전
    let xhr = new XMLHttpRequest();

    // [1] 요청 만들기
    xhr.open("GET", "http://localhost:5001/sleep_times");

    // [2] 요청 보내기
    xhr.send();

    // [3] 응답 기다리기

    // [4] 응답 받기

    // 응답 받기-1
    // XMLHttpRequest.readyState 프로퍼티가 변경될 때마다 콜백함수 호출
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText);
      }
    };

    // 응답 받기-2
    xhr.onload = function () {
      console.log(xhr.responseText);
    };
  }, []);

  return <div className="App"></div>;
}

export default App;
