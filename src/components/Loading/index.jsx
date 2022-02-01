import styles from "./Loading.module.scss";

function Loading() {
  return (
    <svg className={styles.loading} viewBox="0 0 50 50">
      <circle className={styles.ring} cx="25" cy="25" r="20"></circle>
      <circle className={styles.ball} cx="25" cy="5" r="3.5"></circle>
    </svg>

  )
}

export default Loading

