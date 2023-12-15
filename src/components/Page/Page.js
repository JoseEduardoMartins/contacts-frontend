import PropTypes from "prop-types";
import style from "./Page.module.css";

const Page = ({ children }) => <div className={style.page}> {children}</div>;

Page.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Page;
