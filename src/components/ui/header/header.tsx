"use client";
import Link from "next/link";
import { Text } from "@/components/ui";
import ThemeToggleButton from "../toggle-button/toggle-button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@/components/ui";
import clsx from "clsx";

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
      <Text as="h3" size="lg" weight="medium">
        HOME
      </Text>
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
        className={clsx(
          `w-[50vw] h-[80px]  flex justify-around items-center sm:px-[30px] sm:gap-c-gap-lg`
        )}
      >
        <Image width={80} height={80} src="/images/logo.png" alt="" />
        <div className="hidden xl:flex xl:flex-row   lg:gap-c-gap-xxl ">
          {isHome ? (
            <HomeHeader
              moveToExperience={moveToExperience}
              moveToProject={moveToProject}
              moveToIntro={moveToIntro}
            />
          ) : (
            <DetailHeader />
          )}
        </div>
        <div className="flex flex-row items-center  xl:hidden">
          {isHome ? (
            <div onClick={moveToIntro}>
              <Text as="h3" size="lg" weight="medium">
                TOP
              </Text>
            </div>
          ) : (
            <DetailHeader />
          )}
        </div>
        <ThemeToggleButton />
      </Box>
    </div>
  );
}
