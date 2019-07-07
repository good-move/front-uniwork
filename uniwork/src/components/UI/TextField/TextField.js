import React from "react";
import styles from "./TextField.css";

const TextField = ({ placeholder, value, error, onChange }) =>
    <input
        className={error ? styles.textFieldError : styles.textField}
        value={value}
        placeholder={placeholder}
        onChange={onChange}/>;

export default TextField;
