import PropTypes from "prop-types";
import style from "./button.module.css";

function Button ({text}){
    return <button className={style.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;  // 위에 정의한 Button() 함수를 내보내기 함 -> App.js에서 import해서 사용할 예정