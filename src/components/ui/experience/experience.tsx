import ComopnentScrollGroup from "@/components/scroll/components-scroll";
import { VisibleSectionsProps } from "@/types/types";
import ExperienceBox from "../experience-box/experience-box";

export default function Experience({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <>
      <ComopnentScrollGroup
        startRatio={0}
        endRatio={0.88}
        scrollHeight={visibleSections?.[0]["experience"]?.sectionHeight}
        scrollY={visibleSections?.[0]["experience"]?.scrollPosition}
      >
        <ExperienceBox>
          <ExperienceBox.Title>
            <p>Leonardo F. Ashton</p>
            <p>/ design & usability</p>
          </ExperienceBox.Title>
          <ExperienceBox.Content>
            “ It’s clear that a lot of thought went into showcasing your skills
            and creativity. ”
          </ExperienceBox.Content>
        </ExperienceBox>
        <ExperienceBox>
          <ExperienceBox.Title>
            <p>Diego H. Redmond</p>
            <p>/ UI/UX Designer</p>
          </ExperienceBox.Title>
          <ExperienceBox.Content>
            “ It’s clear that a lot of thought went into showcasing your skills
            and creativity. ”
          </ExperienceBox.Content>
        </ExperienceBox>
        <ExperienceBox>
          <ExperienceBox.Title>
            <p>Leonardo F. Ashton</p>
            <p>/ design & usability</p>
          </ExperienceBox.Title>
          <ExperienceBox.Content>
            “ It’s clear that a lot of thought went into showcasing your skills
            and creativity. ”
          </ExperienceBox.Content>
        </ExperienceBox>
      </ComopnentScrollGroup>
    </>
  );
}
