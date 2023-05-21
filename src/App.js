import React, { useState, useEffect } from "react";

/* useEffect
처음 render 할 때 component가 실행되고
다시는 실행되지 않을 function을 넣어줌(?)
useEffect는 코드를 언제 실행할지 선택할 수 있다. "[] <- 요거로"
*/

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("CALL THE API....");
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
