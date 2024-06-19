import PropTypes from "prop-types";
import {
    handleInputObjectChange,
    handleInputObjectListChange,
} from "../../utils/formUtils";
import style from "./Input.module.css";
import { phoneMask } from "../../utils/number.utils";

const maskTypes = {
    tel: (value) => phoneMask(value),
};

const Input = ({ name, placeholder, type, index, form, setForm, ...rest }) => (
    <input
        className={style.input}
        {...{ name, placeholder, type, ...rest }}
        value={
            typeof index === "undefined"
                ? maskTypes[type]
                    ? maskTypes[type](form[name])
                    : form[name]
                : maskTypes[type]
                ? maskTypes[type](form[index][name])
                : form[index][name]
        }
        onChange={(e) =>
            typeof index === "undefined"
                ? handleInputObjectChange(e, form, setForm)
                : handleInputObjectListChange(e, index, form, setForm)
        }
    />
);

Input.defaultProps = {
    index: undefined,
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "tel"]).isRequired,
    index: PropTypes.number,
    form: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]).isRequired,
    setForm: PropTypes.func,
};

export default Input;
