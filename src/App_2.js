import style from "./app.module.css";
import { useEffect, useState,   } from "react";

function App() {

   // State 예시
   const [counter, setCounter] = useState(0);
   const onClick = () => setCounter(prev => prev + 1);
 
   const [keyword, setKeyword] = useState("");
   const onChange = (event) => setKeyword(event.target.value);

  // Effect 예시

  // - useEffect()의 두번째 인자인 []이 비어있기 때문에 state가 변화하는 객체가 무엇인지 React가 알지 못하므로 첫 render때 한번만 실행됨
  const iRunOnlyOnce = () => {
    console.log("나는 컴포넌트가 처음 render될 때 만 실행되요");
  };
  useEffect(iRunOnlyOnce, []);

  // - useEffect()의 두번째 인자인 []에 조건을 걸 객체를 넣어서 React는 해당 객체의 state가 변화할때만 실행하는 조건을 줌
  const iRunOnlyWritedKeyword = () => {
    console.log("나는 Keyword가 변화할때만 실행되요");
  };
  useEffect(iRunOnlyWritedKeyword, [keyword]);

  useEffect(() => {
    console.log("나는 Counter가 변화할때만 실행되요");
  }, [counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here"></input>
      <h1 className={style.title}>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
} 

export default App;
  