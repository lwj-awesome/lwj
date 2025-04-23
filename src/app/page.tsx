import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <p>INTRO</p>
        <p>EXPERIENCE</p>
        <p>PROJECT</p>
      </header>
      <section className={styles.intro}>
        <article className={styles.intro_desc}>
          <h1>A B C D E F G H I J K L M</h1>
          <p>
            Elevating brands through creative digital solutions, proudly
            representing Lisbon's vibrant innovation.
          </p>
        </article>
        <div className={styles.intro_image}>
          스크롤시 펼쳐지는 이미지가들어감
        </div>
        <article></article>
      </section>
    </div>
  );
}
