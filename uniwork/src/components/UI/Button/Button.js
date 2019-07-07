import React from "react";
import styles from "./Button.css";

const Button = ({ text, onClick }) => <button onClick={onClick} className={styles.button}>{text}</button>;

export default Button;
