import styles from "./induce-scroll.module.css";

export default function InduceScroll() {
  return (
    <div className={styles.induceScroll}>
      <div className={styles.arrow_div}>
        <div className={styles.arrow}>
          <img
            className={styles.arrow_first}
            src="https://i.ibb.co/BTbSmBS/1.png"
            alt=""
          />
        </div>
        <div className={styles.arrow}>
          <img
            className={styles.arrow_second}
            src="https://i.ibb.co/BTbSmBS/1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
