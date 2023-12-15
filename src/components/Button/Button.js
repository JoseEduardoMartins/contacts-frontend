import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ type, onClick, children }) => (
    <button className={style.button} {...{ type, onClick }}>
        {children}
    </button>
);

Button.defaultProps = {
    type: "button",
};

Button.propTypes = {
    type: PropTypes.oneOf(["button"]),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
