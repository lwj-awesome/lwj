import Text from "../text-module/text-module";
import styles from "./marquee.module.css";

export default function Marquee({
  children,
  direction = "left",
}: {
  children?: React.ReactNode;
  direction?: "left" | "right";
}) {
  return (
    <div className={styles.marquee_wrapper}>
      <div className={`${styles.marquee} ${styles[direction]}`}>
        {children}
        <Text.marquee>React</Text.marquee>
        <Text.marquee>Storybook</Text.marquee>
        <Text.marquee>JS</Text.marquee>
        <Text.marquee>TS</Text.marquee>
        <Text.marquee>React-query</Text.marquee>
        <Text.marquee>Recoil</Text.marquee>
      </div>
    </div>
  );
}

function MarqueeContent(children: string) {
  return <p>{children}</p>;
}

Marquee.content = MarqueeContent;
