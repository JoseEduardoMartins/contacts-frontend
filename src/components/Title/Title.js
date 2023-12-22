import style from "./Title.module.css";

const Title = ({ children }) => <h1 className={style.title}>{children}</h1>;

export default Title;
