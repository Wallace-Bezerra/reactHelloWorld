import styles from "./subtitle.module.css"

function Subtitle(props){
return (
  <h1 className={styles.subtitle}>
    {props.text}
  </h1>
)
}

export default Subtitle