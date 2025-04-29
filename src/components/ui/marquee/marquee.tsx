import Text from "../text-module/text-module";
import styles from "./marquee.module.css";

export default function Marquee({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.marquee_wrapper}>
      <div className={styles.marquee}>
        {children}
        <Text.marquee>User</Text.marquee>
        <Text.marquee>Dev</Text.marquee>
        <Text.marquee>ExTextrience</Text.marquee>
        <Text.marquee>Web</Text.marquee>
        <Text.marquee>User</Text.marquee>
        <Text.marquee>ExTexce</Text.marquee>
        <Text.marquee>Dev</Text.marquee>
        <Text.marquee>Web</Text.marquee>
      </div>
    </div>
  );
}

function MarqueeContent(children: string) {
  return <p>{children}</p>;
}

Marquee.content = MarqueeContent;
