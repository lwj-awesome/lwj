import ComopnentScrollGroup from "@/components/scroll/components-scroll";
import { VisibleSectionsProps } from "@/types/types";
import { Box } from "@/components/atom/box/box-layout";
import Text from "@/components/atom/text-module/text-module";
import Marquee from "@/components/ui/marquee/marquee";

export default function Experience({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <>
      <div className="p-2 w-full">
        <div className="grid grid-cols-[1fr_2fr] gap-6  rounded-c-border-radius ">
          {/* 1. Career History */}
          <div className="bg-c-box-layout-color p-c-padding-md rounded-c-border-radius my-auto">
            <ComopnentScrollGroup
              startRatio={0}
              endRatio={0.4}
              scrollHeight={visibleSections?.[0]["experience"]?.sectionHeight}
              scrollY={visibleSections?.[0]["experience"]?.scrollPosition}
            >
              <Box colorType="box" className="flex flex-row justify-around  ">
                <Text.subTitle>2014-2016</Text.subTitle>
                <div className="flex flex-col gap-c-gap-md">
                  <Text.subTitle>WebSolutions Co.</Text.subTitle>
                  <Text.description>
                    Junior Full Stack Developer
                  </Text.description>
                </div>
              </Box>

              <Box colorType="box" className="flex flex-row justify-around  ">
                <Text.subTitle>2014-2016</Text.subTitle>
                <div className="flex flex-col gap-c-gap-md">
                  <Text.subTitle>WebSolutions Co.</Text.subTitle>
                  <Text.description>
                    Junior Full Stack Developer
                  </Text.description>
                </div>
              </Box>
              <Box colorType="box" className="flex flex-row justify-around  ">
                <Text.subTitle>2014-2016</Text.subTitle>
                <div className="flex flex-col gap-c-gap-md">
                  <Text.subTitle>WebSolutions Co.</Text.subTitle>
                  <Text.description>
                    Junior Full Stack Developer
                  </Text.description>
                </div>
              </Box>
            </ComopnentScrollGroup>
          </div>

          {/* 4. Bottom Section: Summary + Stack */}
          <div className="grid grid-rows-1 ">
            {/* 3. Introduction Card */}
            <ComopnentScrollGroup
              startRatio={0.4}
              endRatio={0.8}
              scrollHeight={visibleSections?.[0]["experience"]?.sectionHeight}
              scrollY={visibleSections?.[0]["experience"]?.scrollPosition}
            >
              <Box
                colorType="point"
                className="flex flex-row gap-c-gap-lg p-c-padding-md"
              >
                <div className="text-5xl">🧑‍💻</div>
                <div>
                  <Text.title>James Parker</Text.title>
                  <Text.subTitle>
                    Experienced full stack developer skilled in crafting web
                    applications that combine sleek front-end design with robust
                    back-end functionality.
                  </Text.subTitle>
                </div>
              </Box>
              {/* Stack */}
              <div className="rounded-c-border-radius p-c-padding bg-c-box-layout-color ">
                <div className="w-[720px]">
                  <Marquee direction="right" />
                  <Marquee />
                </div>
              </div>
            </ComopnentScrollGroup>
          </div>
        </div>
      </div>
    </>
  );
}
