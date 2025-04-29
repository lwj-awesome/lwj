"use client";
import styles from "./page.module.css";
import { useRef } from "react";
import MyPicture from "@/components/ui/my-picture/my-picture-intro";
import { Intro } from "@/components/ui/intro/intro";
import Project from "@/components/ui/my-project/my-project";
import Header from "@/components/ui/header/header";
import InduceScroll from "@/components/ui/induce-scroll/induce-scroll";
import Marquee from "@/components/ui/marquee/marquee";
import Experience from "@/components/ui/experience/experience";
import { useVisibleSections } from "@/hooks/useVisibleSections";
import Text from "@/components/ui/text-module/text-module";

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

  const getSectionClass = (id: string) => {
    return `${styles.section} ${
      visibleSections?.[0]?.[id] ? styles.visible : ""
    }`;
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    return () => ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header
        moveToExperience={scrollToSection(experienceRef)}
        moveToProject={scrollToSection(projectRef)}
        moveToIntro={scrollToSection(induceScrollRef)}
      />
      <section ref={induceScrollRef}>
        <InduceScroll />
      </section>
      <section ref={introRef} className={styles.intro}>
        {visibleSections?.[0]?.["intro"] && (
          <Intro visibleSections={visibleSections} />
        )}
      </section>
      <section className={getSectionClass("myPicture")} ref={myPictureRef}>
        <article className={styles.my_picture}>
          <MyPicture visibleSections={visibleSections} />
        </article>
      </section>
      <Marquee />

      <section className={styles.experience} ref={experienceRef}>
        <article className={styles.experience_sticky}>
          <div>
            <Text.title>i blend creativity with</Text.title>
            <Text.title>technical expertise</Text.title>
          </div>
          <Text.description>
            I’m dedicated to crafting websites that bring your ideas to life,
            combining design and development to deliver fast, impactful results.
          </Text.description>
        </article>
        <article className={styles.experience_scroll}>
          {visibleSections?.[0]?.["experience"] && (
            <Experience visibleSections={visibleSections} />
          )}
        </article>
      </section>

      <section ref={projectRef} className={getSectionClass("project")}>
        <article className={styles.project}>
          <div className={styles.project_title}>
            <Text.title>A B C D E F G</Text.title>
          </div>
          <article className={styles.project_box}>
            <Project href="/detail">
              <Project.Image />
              <Project.Title>
                <p>project</p>
                <p>SEP 13, 1993</p>
              </Project.Title>
              <Project.desc>
                Samsung Approach to Digital Product Design: A Seamless Blend of
                UI/UX
              </Project.desc>
            </Project>
            <Project href="/detail">
              <Project.Image />
              <Project.Title>
                <p>project</p>
                <p>SEP 13, 1993</p>
              </Project.Title>
              <Project.desc>
                Samsung Approach to Digital Product Design: A Seamless Blend of
                UI/UX
              </Project.desc>
            </Project>
          </article>
        </article>
      </section>
    </>
  );
}
