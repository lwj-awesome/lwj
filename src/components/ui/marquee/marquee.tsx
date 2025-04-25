import styles from "./marquee.module.css";

export default function Marquee({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.marquee_wrapper}>
      <div className={styles.marquee}>
        {children}
        <p>User</p>
        <p>Dev</p>
        <p>Experience</p>
        <p>Web</p>
        <p>User</p>
        <p>Experience</p>
        <p>Dev</p>
        <p>Web</p>
      </div>
    </div>
  );
}

function MarqueeContent(children: string) {
  return <p>{children}</p>;
}

Marquee.content = MarqueeContent;
