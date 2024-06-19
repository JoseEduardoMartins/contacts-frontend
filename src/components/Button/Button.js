import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ type, theme, onClick, children }) => (
    <button
        className={`
        ${style.button}
        ${style[`theme_${theme}`]}
    `}
        {...{ type, onClick }}
    >
        {children}
    </button>
);

Button.defaultProps = {
    type: "button",
    theme: "success",
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]),
    theme: PropTypes.oneOf(["success", "delete"]),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
