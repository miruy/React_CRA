import { useEffect, useState,   } from "react";

function Hello(){

  // 주석코드와 비주석코드는 같은 의미
  // useEffect(() => {
  //   console.log("생성 :)");
  //   return () => console.log("삭제 :(");
  // }, []);

  function create(){
    console.log("create:)");
    return destroy;
  }

  function destroy(){
    console.log("destroy:(");
  }

  useEffect(create, []);
  return <h1>Hello~</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(prev => !prev);

  return (
    <div>
    {show ? <Hello /> : null}  
    <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
} 

export default App;
  