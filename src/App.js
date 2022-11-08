import { useState  } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  return (
    <div>
      <input value={toDo} onChange={onChange} type="text" placeholder="해야 할 일을 작성하세요"></input>
    </div>
  );
} 

export default App;
  