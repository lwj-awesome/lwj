import Text from "../text-module/text-module";
import ThemeToggleButton from "../toggle-button/toggle-button";
import { headerMainStyle, headerStyle } from "./header.style";

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
    <header className={headerStyle}>
      <main className={headerMainStyle}>
        <div className="flex items-center">
          <img src="/images/logo.png" width="90" height="90" alt="Logo" />
        </div>
        <div className="flex flex-row gap-[4rem]">
          <div onClick={moveToIntro} className="flex items-center">
            <Text.header>HOME</Text.header>
          </div>
          <div onClick={moveToExperience} className="flex items-center">
            <Text.header>EXPERIENCE</Text.header>
          </div>
          <div onClick={moveToProject} className="flex items-center">
            <Text.header>PROJECT</Text.header>
          </div>
        </div>
      </main>
      {/* 테마 토글 버튼은 우측 고정 */}
      <div className="absolute top-[30px] right-[30px] bg-white text-black dark:bg-black dark:text-white">
        <ThemeToggleButton />
      </div>
    </header>
  );
}
