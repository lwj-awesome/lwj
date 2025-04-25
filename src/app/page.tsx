"use client";
/* eslint-disable react/no-unescaped-entities */
import { VisibleSectionsProps } from "@/types/types";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { Intro } from "@/components/ui/intro";

export default function Home() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const [visibleSections, setVisibleSections] =
    useState<VisibleSectionsProps[]>();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: experienceRef, id: "experience" },
        { ref: projectRef, id: "project" },
        { ref: introRef, id: "intro" },
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
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <p>INTRO</p>
        <p>EXPERIENCE</p>
        <p>PROJECT</p>
      </header>

      <section
        ref={introRef}
        className={`${styles.intro} ${styles.sectionBlock}`}
      >
        {visibleSections?.[0]?.["intro"] && (
          <Intro visibleSections={visibleSections} />
        )}
        {/* <article className={styles.intro_desc}>
          <h1>A B C D E F G H I J K L M</h1>
          <p>
            Elevating brands through creative digital solutions, proudly
            representing Lisbon's vibrant innovationss.
          </p>
        </article>
        <div className={styles.intro_image}>
          {visibleSections?.[0]?.["intro"] && (
            <ImageScroll
              scrollHeight={visibleSections?.[0]["intro"].sectionHeight}
              scrollY={visibleSections?.[0]["intro"].scrollPosition}
              startRatio={0}
              endRatio={1}
              src="images/see.jpg"
            />
          )}
        </div> */}
      </section>

      <section className={styles.sectionBlock}>marquee position</section>

      <section className={`${styles.experience} ${styles.sectionBlock}`}>
        <article className={styles.experience_desc}>
          <h1>A B C D E F G H I J K L M</h1>
          <p>
            Elevating brands through creative digital solutions, proudly
            representing Lisbon's vibrant innovation.
          </p>
        </article>
        <article className={styles.experience_image}>
          스크롤박스가들어갈것
        </article>
      </section>

      <section className={`${styles.project} ${styles.sectionBlock}`}>
        <article className={styles.project_desc_sticky}>
          <h1>A B C D E F G H I J K L M</h1>
          <p>
            Elevating brands through creative digital solutions, proudly
            representing Lisbon's vibrant innovation.
          </p>
        </article>
        <article className={styles.project_box_layer}>
          <article className={styles.project_image}>프로젝트</article>
          <div className={styles.project_second_box}>
            <article className={styles.project_image}>프로젝트</article>
            <article className={styles.project_image}>프로젝트</article>
          </div>
          <div className={styles.project_second_box}>
            <article className={styles.project_image}>프로젝트</article>
            <article className={styles.project_image}>프로젝트</article>
          </div>
        </article>
      </section>
    </div>
  );
}
