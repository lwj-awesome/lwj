import Link from "next/link";
import Text from "../text-module/text-module";
import ThemeToggleButton from "../toggle-button/toggle-button";
import {
  headerContentStyle,
  headerMainStyle,
  headerMobileContentStyle,
  headerStyle,
} from "./header.style";

interface HeaderProps {
  moveToExperience?: () => void;
  moveToProject?: () => void;
  moveToIntro?: () => void;
  isHome?: boolean;
}

function HomeHeader({
  moveToExperience,
  moveToProject,
  moveToIntro,
}: HeaderProps) {
  return (
    <>
      <div onClick={moveToIntro}>
        <Text.header>HOME</Text.header>
      </div>
      <div onClick={moveToExperience}>
        <Text.header>EXPERIENCE</Text.header>
      </div>
      <div onClick={moveToProject}>
        <Text.header>PROJECT</Text.header>
      </div>
    </>
  );
}
function DetailHeader() {
  return (
    <Link href={"/"}>
      <Text.header>HOME</Text.header>
    </Link>
  );
}

export default function Header({
  moveToExperience,
  moveToProject,
  moveToIntro,
  isHome = true,
}: HeaderProps) {
  return (
    <header className={headerStyle}>
      <main className={headerMainStyle}>
        <div>
          <img src="/images/logo.png" width="90" height="90" alt="Logo" />
        </div>
        <div className={headerContentStyle}>
          {isHome ? (
            <HomeHeader
              moveToExperience={moveToExperience}
              moveToProject={moveToProject}
              moveToIntro={moveToIntro}
            />
          ) : (
            <DetailHeader />
          )}
          <div>
            <ThemeToggleButton />
          </div>
        </div>
        {/* mobile */}
        <div className={headerMobileContentStyle}>
          {isHome ? (
            <div onClick={moveToIntro}>
              <Text.header>TOP</Text.header>
            </div>
          ) : (
            <DetailHeader />
          )}
          <div>
            <ThemeToggleButton />
          </div>
        </div>
      </main>
    </header>
  );
}
