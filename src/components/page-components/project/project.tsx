import ComopnentScrollGroup from "@/components/scroll/components-scroll";
import { VisibleSectionsProps } from "@/types/types";
import Text from "../../atom/text-module/text-module";

import { ProjectImage } from "@/components/ui/pjt-image/pjt-image";

export default function Project({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <article
      className={`section ${visibleSections?.[0]?.["project"] && "visible"}`}
    >
      <div className="w-full flex flex-col items-center gap-c-gap-lg">
        <ComopnentScrollGroup
          startRatio={0.2}
          endRatio={0.8}
          scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
          scrollY={visibleSections?.[0]["project"]?.scrollPosition}
        >
          <Text.title>PROJECT</Text.title>
        </ComopnentScrollGroup>
        <div className=" p-c-gap-lg w-full lg:h-[700px]  rounded-c-border-radius flex flex-col gap-c-gap-lg">
          <ComopnentScrollGroup
            startRatio={0.3}
            endRatio={0.7}
            scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
            scrollY={visibleSections?.[0]["project"]?.scrollPosition}
          >
            <div className="w-full lg:flex lg:flex-row flex flex-col gap-c-gap-md">
              <ProjectImage
                href="/detail/myPjt"
                title="포트폴리오"
                src="/images/myPJT.png"
                width="55%"
              />
              <ProjectImage
                href="/detail/nsd"
                title="서비스데스크"
                src="/images/nsd-1.png"
                width="45%"
              />
            </div>
          </ComopnentScrollGroup>
          <ComopnentScrollGroup
            startRatio={0.5}
            endRatio={0.8}
            scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
            scrollY={visibleSections?.[0]["project"]?.scrollPosition}
          >
            <div className="w-full lg:flex lg:flex-row flex flex-col gap-c-gap-md">
              <ProjectImage
                href="/detail/nci"
                title="장애관리시스템"
                src="/images/nci-1.png"
                width="45%"
              />
              <ProjectImage
                href="/detail/giggy"
                title="호주 구인구직 프로젝트"
                src="/images/giggy/main.png"
                width="55%"
              />
            </div>
          </ComopnentScrollGroup>
        </div>
      </div>
    </article>
  );
}
