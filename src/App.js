import Button from "./button";
import style from "./app.module.css";

function App() {
  return (
    <div>
      <h1 className={style.title}>Welcome~ React! </h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
 