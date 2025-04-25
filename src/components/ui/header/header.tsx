import styles from "./header.module.css";
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
      <div onClick={moveToIntro}>HOME</div>
      <div onClick={moveToExperience}>EXPERIENCE</div>
      <div onClick={moveToProject}>PROJECT</div>
    </header>
  );
}
