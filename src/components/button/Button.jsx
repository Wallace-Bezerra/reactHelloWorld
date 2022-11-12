import styles from "./Button.module.css";

function Button({ children, click }) {
  console.log(styles);
  return (
    <button className={styles.button} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
