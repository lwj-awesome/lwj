import ComopnentScrollGroup from "@/components/scroll/components-scroll";
import { VisibleSectionsProps } from "@/types/types";
import Text from "../../atom/text-module/text-module";

import { ServiceDesk } from "../servicedesk-project/servicedesk-project";
import { Nci } from "../nci-project/nci-project";

export default function Project({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <article
      className={`section ${visibleSections?.[0]?.["project"] && "visible"}`}
    >
      <div className="flex flex-col items-center gap-c-gap-lg">
        <ComopnentScrollGroup
          startRatio={0.2}
          endRatio={0.8}
          scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
          scrollY={visibleSections?.[0]["project"]?.scrollPosition}
        >
          <Text.title>PROJECT</Text.title>
        </ComopnentScrollGroup>
        <div className="flex lg:flex-row flex-col gap-c-gap-md">
          <ComopnentScrollGroup
            startRatio={0.1}
            endRatio={0.3}
            scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
            scrollY={visibleSections?.[0]["project"]?.scrollPosition}
          >
            <ServiceDesk />
          </ComopnentScrollGroup>

          <ComopnentScrollGroup
            startRatio={0.1}
            endRatio={0.5}
            scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
            scrollY={visibleSections?.[0]["project"]?.scrollPosition}
          >
            <Nci />
          </ComopnentScrollGroup>
          <ComopnentScrollGroup
            startRatio={0.1}
            endRatio={0.7}
            scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
            scrollY={visibleSections?.[0]["project"]?.scrollPosition}
          >
            <ServiceDesk />
          </ComopnentScrollGroup>
          <ComopnentScrollGroup
            startRatio={0.1}
            endRatio={0.8}
            scrollHeight={visibleSections?.[0]["project"]?.sectionHeight}
            scrollY={visibleSections?.[0]["project"]?.scrollPosition}
          >
            <Nci />
          </ComopnentScrollGroup>
        </div>
      </div>
    </article>
  );
}
