import ComopnentScrollGroup from "@/components/scroll/components-scroll";
import { VisibleSectionsProps } from "@/types/types";
import Marquee from "../marquee/marquee";

export default function Experience({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <>
      <div className="text-white p-2 font-sans w-full">
        <div className="grid grid-cols-[1fr_2fr] gap-6  rounded-xl ">
          {/* 1. Career History */}
          <ComopnentScrollGroup
            startRatio={0}
            endRatio={0.4}
            scrollHeight={visibleSections?.[0]["experience"]?.sectionHeight}
            scrollY={visibleSections?.[0]["experience"]?.scrollPosition}
          >
            <div
              className={`rounded-lg p-4
               bg-[#1a1a1a]`}
            >
              <p className="text-sm text-gray-300">2014-2016</p>
              <p className="font-semibold">WebSolutions Co.</p>
              <p className="text-sm text-gray-400">
                Junior Full Stack Developer
              </p>
            </div>
            <div
              className={`rounded-lg p-4
               bg-[#1a1a1a]`}
            >
              <p className="text-sm text-gray-300">2014-2016</p>
              <p className="font-semibold">WebSolutions Co.</p>
              <p className="text-sm text-gray-400">
                Junior Full Stack Developer
              </p>
            </div>
            <div
              className={`rounded-lg p-4 
               bg-[#1a1a1a]`}
            >
              <p className="text-sm text-gray-300">2014-2016</p>
              <p className="font-semibold">WebSolutions Co.</p>
              <p className="text-sm text-gray-400">
                Junior Full Stack Developer
              </p>
            </div>
            <div
              className={`rounded-lg p-4
               bg-[#1a1a1a]`}
            >
              <p className="text-sm text-gray-300">2014-2016</p>
              <p className="font-semibold">WebSolutions Co.</p>
              <p className="text-sm text-gray-400">
                Junior Full Stack Developer
              </p>
            </div>
          </ComopnentScrollGroup>

          {/* 4. Bottom Section: Summary + Stack */}
          <div className="grid grid-rows-1 ">
            {/* 3. Introduction Card */}
            <ComopnentScrollGroup
              startRatio={0.4}
              endRatio={0.6}
              scrollHeight={visibleSections?.[0]["experience"]?.sectionHeight}
              scrollY={visibleSections?.[0]["experience"]?.scrollPosition}
            >
              <div className="flex flex-row gap-5 bg-[#B5895A]  text-black rounded-xl p-4">
                <div className="text-6xl">🧑‍💻</div>
                <div>
                  <h2 className="text-3xl font-bold">James Parker</h2>
                  <p className="mt-2 text-2xl">
                    Experienced full stack developer skilled in crafting web
                    applications that combine sleek front-end design with robust
                    back-end functionality.
                  </p>
                </div>
              </div>
              {/* Stack */}
              <div className="rounded-xl p-6 ">
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
