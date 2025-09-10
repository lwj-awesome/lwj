"use client";
import { useRef } from "react";
import { Header, InduceScroll } from "@/components/ui";
import { useVisibleSections } from "@/hooks/useVisibleSections";
import {
  Experience,
  Intro,
  MyPicture,
  Project,
} from "@/components/page-components";

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

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    return () =>
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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

      <section
        className="h-[700vh] p-c-gap-md w-full sm:p-c-gap-xxl"
        ref={myPictureRef}
      >
        <article className="sticky top-[8rem]">
          {visibleSections?.[0]?.["myPicture"] && (
            <MyPicture visibleSections={visibleSections} />
          )}
        </article>
      </section>

      <section
        className="h-[700vh] p-c-gap-md w-full sm:p-c-gap-xxl"
        ref={experienceRef}
      >
        <article className="sticky lg:top-[8rem] top-[2rem]">
          {visibleSections?.[0]?.["experience"] && (
            <Experience visibleSections={visibleSections} />
          )}
        </article>
      </section>
      <section
        className="h-[600vh] p-c-gap-md w-full sm:p-c-gap-xxl mb-56"
        ref={projectRef}
      >
        <article className="sticky top-[8rem]">
          {visibleSections?.[0]?.["project"] && (
            <Project visibleSections={visibleSections} />
          )}
        </article>
      </section>
    </div>
  );
}
