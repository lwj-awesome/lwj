"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import MyPicture from "@/components/ui/my-picture/my-picture-intro";
import { Intro } from "@/components/ui/intro/intro";
import { VisibleSectionsProps } from "@/types/types";
import Project from "@/components/ui/my-project/my-project";
import Header from "@/components/ui/header/header";
import InduceScroll from "@/components/ui/induce-scroll/induce-scroll";
import Marquee from "@/components/ui/marquee/marquee";
import Experience from "@/components/ui/experience/experience";

export default function Home() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const myPictureRef = useRef<HTMLDivElement | null>(null);
  const ProjectRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const induceScrollRef = useRef<HTMLDivElement | null>(null);
  const [visibleSections, setVisibleSections] =
    useState<VisibleSectionsProps[]>();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: experienceRef, id: "experience" },
        { ref: myPictureRef, id: "myPicture" },
        { ref: ProjectRef, id: "project" },
        { ref: introRef, id: "intro" },
        { ref: induceScrollRef, id: "induceScroll" },
      ];

      // 각 섹션의 스크롤 위치 저장
      const sectionPositions: Record<string, number> = {};
      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          sectionPositions[id] =
            ref.current.getBoundingClientRect().top + window.scrollY;
        }
      });

      const visibleSections = sections
        .map(({ ref, id }) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return null;
          // 화면 최상단을 지나간 섹션만 필터링
          if (rect.top >= 0 || rect.bottom <= 0) return null;
          // 내부 스크롤 위치 (0부터 시작)
          const sectionHeight = rect.bottom - rect.top;
          const scrollPosition = Math.min(
            Math.max(-rect.top, 0),
            sectionHeight
          );
          return {
            [id]: {
              sectionHeight,
              scrollPosition,
              progress: scrollPosition / sectionHeight,
            },
          };
        })
        .filter(Boolean); // null 값 제거
      setVisibleSections(visibleSections as VisibleSectionsProps[]);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMyPictureVisible = visibleSections?.[0]?.["myPicture"];
  const myPictureSection = ` ${styles.section} ${
    isMyPictureVisible ? styles.visible : ""
  }`;

  const isProjectVisible = visibleSections?.[0]?.["project"];
  const projectSection = `${styles.section} ${
    isProjectVisible ? styles.visible : ""
  }`;

  const moveToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const moveToProject = () => {
    ProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const moveToIntro = () => {
    induceScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        moveToExperience={moveToExperience}
        moveToProject={moveToProject}
        moveToIntro={moveToIntro}
      />
      <section ref={induceScrollRef}>
        <InduceScroll />
      </section>
      <section ref={introRef} className={styles.intro}>
        {visibleSections?.[0]?.["intro"] && (
          <Intro visibleSections={visibleSections} />
        )}
      </section>
      <section className={myPictureSection} ref={myPictureRef}>
        <article className={styles.my_picture}>
          <MyPicture visibleSections={visibleSections} />
        </article>
      </section>
      <Marquee />

      <section className={styles.experience} ref={experienceRef}>
        <article className={styles.experience_sticky}>
          <div className={styles.experience_title}>
            <h1>i blend creativity with</h1>
            <h1>technical expertise</h1>
          </div>
          <div className={styles.experience_content}>
            I’m dedicated to crafting websites that bring your ideas to life,
            combining design and development to deliver fast, impactful results.
          </div>
        </article>
        <article className={styles.experience_scroll}>
          {visibleSections?.[0]?.["experience"] && (
            <Experience visibleSections={visibleSections} />
          )}
        </article>
      </section>

      <section ref={ProjectRef} className={projectSection}>
        <article className={styles.project}>
          <div className={styles.project_title}>
            <span>CASE STUDY</span>
            <h1>A B C D E F G</h1>
          </div>
          <article className={styles.project_box}>
            <Project href="/detail">
              <Project.Image />
              <Project.Title>
                <div>project</div>
                <div>SEP 13, 1993</div>
              </Project.Title>
              <Project.desc>
                Samsung's Approach to Digital Product Design: A Seamless Blend
                of UI/UX
              </Project.desc>
            </Project>
            <Project href="/detail">
              <Project.Image />
              <Project.Title>
                <div>project</div>
                <div>SEP 13, 1993</div>
              </Project.Title>
              <Project.desc>
                Samsung's Approach to Digital Product Design: A Seamless Blend
                of UI/UX
              </Project.desc>
            </Project>
          </article>
        </article>
      </section>
    </>
  );
}
