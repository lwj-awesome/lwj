"use client";
import Link from "next/link";
import Text from "../../atom/text-module/text-module";
import ThemeToggleButton from "../../atom/toggle-button/toggle-button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@/components/atom/box/box-layout";

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
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div
      className={`w-fit fixed top-0 left-[50%] translate-x-[-50%]  z-50 transition-transform duration-300
      ${showHeader ? "translate-y-[20px]" : "-translate-y-full"}
    `}
    >
      <Box
        colorType="header"
        className="h-[80px] flex justify-between items-center sm:px-[30px] sm:gap-c-gap-lg "
      >
        <Image width={80} height={80} src="/images/logo.png" alt="" />
        <div className="flex flex-row items-center gap-c-gap-xxl ">
          {isHome ? (
            <HomeHeader
              moveToExperience={moveToExperience}
              moveToProject={moveToProject}
              moveToIntro={moveToIntro}
            />
          ) : (
            <DetailHeader />
          )}

          <ThemeToggleButton />
        </div>
        {/* mobile */}
        <div className="flex flex-row justify-between items-center sm:hidden">
          {isHome ? (
            <div onClick={moveToIntro}>
              <Text.header>TOP</Text.header>
            </div>
          ) : (
            <DetailHeader />
          )}
          <ThemeToggleButton />
        </div>
      </Box>
    </div>
  );
}
