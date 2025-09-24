import { ComponentScrollGroup as ComponentScrollGroup } from "@/components/scroll";
import { VisibleSectionsProps } from "@/types/types";
import { Text, BlurMarquee, Box } from "@/components/ui";
export default function Experience({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <>
      <div className="p-2 w-full">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-6  rounded-c-border-radius ">
          <div className="lg:bg-c-box-layout-color lg:p-c-padding-md rounded-c-border-radius lg:my-auto">
            <ComponentScrollGroup
              startRatio={0}
              endRatio={0.4}
              scrollHeight={visibleSections?.[0]["experience"]?.sectionHeight}
              scrollY={visibleSections?.[0]["experience"]?.scrollPosition}
            >
              <Box colorType="box" className="flex flex-row justify-between  ">
                <Text.subTitle>25 / 05 - now</Text.subTitle>
                <div className="flex flex-col items-end gap-c-gap-md">
                  <Text.subTitle>NCIDS</Text.subTitle>
                  <Text.description>Front-end Developer</Text.description>
                </div>
              </Box>
              <Box colorType="box" className="flex flex-row justify-between  ">
                <Text.subTitle>22 / 02 - 25 / 04</Text.subTitle>
                <div className="flex flex-col items-end gap-c-gap-md">
                  <Text.subTitle>NCITS</Text.subTitle>
                  <Text.description>Front-end Developer</Text.description>
                </div>
              </Box>
              <Box colorType="box" className="flex flex-row justify-between  ">
                <Text.subTitle>21 / 03 ~ 22 / 01</Text.subTitle>
                <div className="flex flex-col items-end gap-c-gap-md">
                  <Text.subTitle>SSAFY</Text.subTitle>
                  <Text.description>삼성 소프트웨어 아카데미</Text.description>
                </div>
              </Box>
              <Box colorType="box" className="flex flex-row justify-between">
                <Text.subTitle>14 / 03 ~ 21 / 02</Text.subTitle>
                <div className="flex flex-col items-end gap-c-gap-md">
                  <Text.subTitle>강릉원주대학교</Text.subTitle>
                  <Text.description>전기공학부</Text.description>
                </div>
              </Box>
            </ComponentScrollGroup>
          </div>

          <div className="lg:grid lg:grid-rows-1 ">
            <ComponentScrollGroup
              startRatio={0.3}
              endRatio={0.75}
              scrollHeight={visibleSections?.[0]["experience"]?.sectionHeight}
              scrollY={visibleSections?.[0]["experience"]?.scrollPosition}
            >
              <div className="flex flex-col lg:flex-row gap-c-gap-md h-[200px]">
                <Box
                  colorType="img"
                  className="flex-1/3 flex flex-col justify-center items-center"
                >
                  <Text.title>NCIDS</Text.title>
                  <Text.description>2025/05/1 - (영업양수도)</Text.description>
                </Box>
                <Box
                  colorType="point"
                  className=" flex-1/2 flex flex-col gap-c-gap-md justify-center items-center p-c-padding-md"
                >
                  <Text.title>LEE WON JONG</Text.title>
                  <Text.subTitle>
                    프론트엔드 개발 4년차로, React와 Next.js 활용해 사용자 경험
                    중심의 서비스를 만듭니다. 사람들이 제가 만든 서비스에서
                    즐겁고 편리한 경험을 하길 바랍니다.
                  </Text.subTitle>
                </Box>
              </div>
              <div className="hidden lg:block rounded-c-border-radius p-c-padding bg-c-box-layout-color ">
                <BlurMarquee className="lg:w-[720px] " />
              </div>
            </ComponentScrollGroup>
          </div>
        </div>
      </div>
    </>
  );
}
