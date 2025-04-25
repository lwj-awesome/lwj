import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_title}>
        <h1>A B C D E F G </h1>
        <p>😃 😃 😃 😃 😃 😃 😃</p>
      </div>
      <div className={styles.footer_content}>
        <div className={styles.footer_intro}>
          A B C D E F G H I J K L M N O P
        </div>
        <div className={styles.footer_contact}>
          <div>010-010-010</div>
          <div>llll@llll.com</div>
        </div>
      </div>
    </footer>
  );
}
