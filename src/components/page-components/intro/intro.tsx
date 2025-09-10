import { FadeText, SideFadeText } from "@/components/scroll";
import { VisibleSectionsProps } from "@/types/types";

export function Intro({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <article>
      <SideFadeText
        scrollHeight={visibleSections?.[0]["intro"].sectionHeight}
        scrollY={visibleSections?.[0]["intro"].scrollPosition}
        startRatio={0.2}
        endRatio={0.5}
        style={textStyle}
        fadeFullOut={[0.5, 0.85]}
      >
        AWESOME
      </SideFadeText>
      <SideFadeText
        scrollHeight={visibleSections?.[0]["intro"].sectionHeight}
        scrollY={visibleSections?.[0]["intro"].scrollPosition}
        startRatio={0.2}
        endRatio={0.5}
        style={textStyle1}
        isLeft
        fadeFullOut={[0.5, 0.85]}
      >
        FRONT_END
      </SideFadeText>
      <SideFadeText
        scrollHeight={visibleSections?.[0]["intro"].sectionHeight}
        scrollY={visibleSections?.[0]["intro"].scrollPosition}
        startRatio={0.2}
        endRatio={0.5}
        style={textStyle2}
        fadeFullOut={[0.5, 0.85]}
      >
        DEVELOPER
      </SideFadeText>
      <FadeText
        scrollHeight={visibleSections?.[0]["intro"]?.sectionHeight}
        scrollY={visibleSections?.[0]["intro"]?.scrollPosition}
        startRatio={0.7}
        endRatio={1}
      >
        LWJ
      </FadeText>
    </article>
  );
}

const textStyle: React.CSSProperties = {
  top: "30vh",
};
const textStyle1: React.CSSProperties = {
  top: "46vh",
};
const textStyle2: React.CSSProperties = {
  top: "62vh",
};
