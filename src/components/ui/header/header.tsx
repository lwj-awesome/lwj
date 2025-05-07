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
    <header className="flex flex-row justify-center w-full fixed z-1 gap-[10rem] px-[30px] py-[20px] bg-custom-background">
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
