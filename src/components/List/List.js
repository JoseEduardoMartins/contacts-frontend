import PropTypes from "prop-types";
import style from "./List.module.css";

const List = ({ children }) => <div className={style.list}>{children}</div>;

List.propTypes = {
    children: PropTypes.node.isRequired,
};

export default List;
