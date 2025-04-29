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
        <Text.Header>HOME</Text.Header>
      </div>
      <div onClick={moveToExperience}>
        <Text.Header>EXPERIENCE</Text.Header>
      </div>
      <div onClick={moveToProject}>
        <Text.Header>PROJECT</Text.Header>
      </div>
    </header>
  );
}
