import PropTypes from "prop-types";
import style from "./Empty.module.css";

const Empty = ({ children }) => <h3 className={style.empty}>{children}</h3>;

Empty.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Empty;
