"use client";
import { useRef } from "react";
import MyPicture from "@/components/ui/my-picture/my-picture-intro";
import Header from "@/components/ui/header/header";
import { Intro } from "@/components/ui/intro/intro";
import InduceScroll from "@/components/ui/induce-scroll/induce-scroll";
import Marquee from "@/components/ui/marquee/marquee";
import Experience from "@/components/ui/experience/experience";
import { useVisibleSections } from "@/hooks/useVisibleSections";
import Text from "@/components/ui/text-module/text-module";
import { ServiceDesk } from "@/components/ui/servicedesk-project/servicedesk-project";
import { Nci } from "@/components/ui/nci-project/nci-project";
import {
  experiecntSectionLayoutStyle,
  experienceSectionBoxStyle,
  experienceSectionStyle,
  projectSectionBoxLayoutStyle,
  projectSectionStyle,
  projectSectionTiteStyle,
} from "./page.styles";
import clsx from "clsx";

export default function Home() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const myPictureRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const induceScrollRef = useRef<HTMLDivElement | null>(null);

  const sections = [
    { ref: experienceRef, id: "experience" },
    { ref: myPictureRef, id: "myPicture" },
    { ref: projectRef, id: "project" },
    { ref: introRef, id: "intro" },
    { ref: induceScrollRef, id: "induceScroll" },
  ];
  const visibleSections = useVisibleSections(sections);

  const getSectionClass = (id: string) =>
    clsx(
      "pt-[20rem]",
      "opacity-0",
      visibleSections?.[0]?.[id] ? "animate-fadeUp" : "animate-fadeOut"
    );

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    return () => ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-[100%]">
      <Header
        moveToExperience={scrollToSection(experienceRef)}
        moveToProject={scrollToSection(projectRef)}
        moveToIntro={scrollToSection(induceScrollRef)}
      />
      <section ref={induceScrollRef}>
        <InduceScroll />
      </section>
      <section ref={introRef} className="h-[800vh]">
        {visibleSections?.[0]?.["intro"] && (
          <Intro visibleSections={visibleSections} />
        )}
      </section>
      <section className={getSectionClass("myPicture")} ref={myPictureRef}>
        <article className="px-[1rem] py-[7rem]">
          <MyPicture visibleSections={visibleSections} />
        </article>
      </section>

      <div className="relative group h-[250px] w-full overflow-hidden">
        <div className="hover:blur-lg transition duration-300">
          <Marquee />
          <Marquee direction="right" />
        </div>
        <div className="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center">
          <div className="opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
            <p className="text-center text-lg font-semibold text-gray-900 bg-white/80 px-4 py-2 rounded shadow-md">
              올라오는 텍스트
            </p>
          </div>
        </div>
      </div>

      <section className={experiecntSectionLayoutStyle} ref={experienceRef}>
        {/* <article className={experienceSectionStyle}>
          <div>
            <Text.title>이력 및 교육</Text.title>
          </div>
          <Text.description>
            I’m dedicated to crafting websites that bring your ideas to life,
            combining design and development to deliver fast, impactful results.
          </Text.description>
        </article> */}
        <article className={experienceSectionBoxStyle}>
          {visibleSections?.[0]?.["experience"] && (
            <Experience visibleSections={visibleSections} />
          )}
        </article>
      </section>

      <Marquee />
      <section ref={projectRef} className={getSectionClass("project")}>
        <article className={projectSectionStyle}>
          <div className={projectSectionTiteStyle}>
            <Text.title>PROJECT</Text.title>
          </div>
          <div className={projectSectionBoxLayoutStyle}>
            <ServiceDesk />
            <Nci />
            <ServiceDesk />
            <Nci />
          </div>
        </article>
      </section>
    </div>
  );
}
