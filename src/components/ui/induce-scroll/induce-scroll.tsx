import Image from "next/image";
import styles from "./induce-scroll.module.css";

export default function InduceScroll() {
  return (
    <div className={styles.induceScroll}>
      <div className={styles.arrow_div}>
        <Image
          className={styles.arrow_first}
          src="https://i.ibb.co/BTbSmBS/1.png"
          alt="arrow"
          width={30}
          height={30}
        />
        <Image
          className={styles.arrow_second}
          src="https://i.ibb.co/BTbSmBS/1.png"
          alt="arrow"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
