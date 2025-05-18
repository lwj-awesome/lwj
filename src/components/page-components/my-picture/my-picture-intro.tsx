import ComopnentScrollGroup from "@/components/scroll/components-scroll";
import { VisibleSectionsProps } from "@/types/types";
import Text from "../../atom/text-module/text-module";
import { Box } from "@/components/atom/box/box-layout";
import { ColorDot } from "@/components/atom/color-dot";

export default function MyPicture({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <article
      className={`section ${visibleSections?.[0]?.["myPicture"] && "visible"}`}
    >
      <div className="flex sm:w-full sm:flex-row sm:gap-c-gap-xxl sm:items-center sm:p-c-padding-xxl">
        <div className="flex flex-col gap-c-gap-md items-center">
          <ComopnentScrollGroup
            startRatio={0.1}
            endRatio={0.4}
            scrollHeight={visibleSections?.[0]["myPicture"]?.sectionHeight}
            scrollY={visibleSections?.[0]["myPicture"]?.scrollPosition}
          >
            <Text.title>
              사용자에게 <ColorDot>*</ColorDot> 가치를 더하고 싶은
            </Text.title>
          </ComopnentScrollGroup>

          <ComopnentScrollGroup
            startRatio={0.4}
            endRatio={0.6}
            scrollHeight={visibleSections?.[0]["myPicture"]?.sectionHeight}
            scrollY={visibleSections?.[0]["myPicture"]?.scrollPosition}
          >
            <Text.title>
              <ColorDot>*</ColorDot>개발자 이원종입니다
              <ColorDot>.</ColorDot>
            </Text.title>
          </ComopnentScrollGroup>

          <ComopnentScrollGroup
            startRatio={0.6}
            endRatio={0.8}
            scrollHeight={visibleSections?.[0]["myPicture"]?.sectionHeight}
            scrollY={visibleSections?.[0]["myPicture"]?.scrollPosition}
          >
            <div className="flex flex-col gap-c-gap-md items-center">
              <Text.description>
                저는 사용자에게 도움이 되는 개발을 하고 싶습니다. 사람들이 제가
                만든 웹사이트를 쓰면서 즐거워지는게 제 목표입니다
              </Text.description>
              <Text.description>
                이러한 개발자가 되기 위해 프론트엔드 기술 학습에 끊임없이
                노력하고 있어요.
              </Text.description>
            </div>
          </ComopnentScrollGroup>
        </div>
        <ComopnentScrollGroup
          startRatio={0.6}
          endRatio={0.8}
          scrollHeight={visibleSections?.[0]["myPicture"]?.sectionHeight}
          scrollY={visibleSections?.[0]["myPicture"]?.scrollPosition}
        >
          <Box
            colorType="img"
            className="hidden md:w-[20rem] md:h-[20rem] md:block "
          >
            img
          </Box>
        </ComopnentScrollGroup>
      </div>
    </article>
  );
}
