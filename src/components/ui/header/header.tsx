import styles from "./header.module.css";
import Text from "../text-module/text-module";
interface HeaderProps {
  moveToExperience: () => void;
  moveToProject: () => void;
  moveToIntro: () => void;
}

export default function Header({
  moveToExperience,
  moveToProject,
  moveToIntro,
}: HeaderProps) {
  return (
    <header className={styles.header_layout}>
      <div onClick={moveToIntro}>
        <Text.header>HOME</Text.header>
      </div>
      <div onClick={moveToExperience}>
        <Text.header>EXPERIENCE</Text.header>
      </div>
      <div onClick={moveToProject}>
        <Text.header>PROJECT</Text.header>
      </div>
    </header>
  );
}
