import styles from "./subtitle.module.css";

function Subtitle({ text }) {
  return <h1 className={styles.subtitle}>{text}</h1>;
}

Subtitle.defaultProps = { text: "padrao" };

export default Subtitle;
