import FadeText from "@/components/scroll/fade-text";
import ImageScroll from "@/components/scroll/image-scroll";
import SideFadeText from "@/components/scroll/side-fade-text";
import { VisibleSectionsProps } from "@/types/types";

export function Intro({
  visibleSections,
}: {
  visibleSections: VisibleSectionsProps[];
}) {
  return (
    <article>
      <ImageScroll
        scrollHeight={visibleSections?.[0]["intro"].sectionHeight}
        scrollY={visibleSections?.[0]["intro"].scrollPosition}
        startRatio={0}
        endRatio={0.7}
        src="images/see.jpg"
      />
      <SideFadeText
        scrollHeight={visibleSections?.[0]["intro"].sectionHeight}
        scrollY={visibleSections?.[0]["intro"].scrollPosition}
        startRatio={0.2}
        endRatio={0.5}
        style={textStyle}
        fadeFullOut={[0.5, 0.85]}
      >
        ABC
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
        ABC
      </SideFadeText>
      <SideFadeText
        scrollHeight={visibleSections?.[0]["intro"].sectionHeight}
        scrollY={visibleSections?.[0]["intro"].scrollPosition}
        startRatio={0.2}
        endRatio={0.5}
        style={textStyle2}
        fadeFullOut={[0.5, 0.85]}
      >
        ABC
      </SideFadeText>
      <FadeText
        scrollHeight={visibleSections?.[0]["intro"]?.sectionHeight}
        scrollY={visibleSections?.[0]["intro"]?.scrollPosition}
        startRatio={0.7}
        endRatio={1}
      >
        ABC
      </FadeText>
    </article>
  );
}

const textStyle: React.CSSProperties = {
  fontSize: "10vh",
  position: "fixed",
  top: "30vh",
  width: "100vw",
  textAlign: "center",
};
const textStyle1: React.CSSProperties = {
  fontSize: "10vh",
  position: "fixed",
  top: "43vh",
  width: "100vw",
  textAlign: "center",
};
const textStyle2: React.CSSProperties = {
  fontSize: "10vh",
  position: "fixed",
  top: "56vh",
  width: "100vw",
  textAlign: "center",
};
