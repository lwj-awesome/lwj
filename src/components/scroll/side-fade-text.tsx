import { calculateScroll } from "@/utils/utils";

interface SideFadeTextProps {
  startRatio: number;
  endRatio: number;
  children: React.ReactNode;
  scrollHeight: number;
  scrollY: number;
  style: React.CSSProperties;
  isLeft?: boolean;
  fadeFullOut: number[];
}

export default function SideFadeText({
  startRatio,
  endRatio,
  children,
  scrollY,
  scrollHeight,
  style,
  isLeft = false,
  fadeFullOut,
}: SideFadeTextProps) {
  const ratio = scrollY / scrollHeight;
  const middleRatio = startRatio + (endRatio - startRatio) / 2;
  const sections = {
    fadeIn: { start: startRatio, end: middleRatio },
    fadeFullOut: { start: fadeFullOut[0], end: fadeFullOut[1] },
  };

  const animationStyles = {
    fadeIn: {
      opacity: calculateScroll(scrollY, scrollHeight, {
        start: [sections.fadeIn.start, 0],
        end: [sections.fadeIn.end, 1],
      }),
      transform: isLeft
        ? `translateX(-50%) translate3d(${calculateScroll(
            scrollY,
            scrollHeight,
            {
              start: [sections.fadeIn.start, 200],
              end: [sections.fadeIn.end, 0],
            }
          )}%,0, 0)`
        : `translateX(-50%) translate3d(-${calculateScroll(
            scrollY,
            scrollHeight,
            {
              start: [sections.fadeIn.start, 200],
              end: [sections.fadeIn.end, 0],
            }
          )}%,0, 0)`,
    },
    fadeFullOut: {
      opacity: calculateScroll(scrollY, scrollHeight, {
        start: [sections.fadeFullOut.start, 200],
        end: [sections.fadeFullOut.end, 0],
      }),
      transform: isLeft
        ? `translateX(-50%) translate3d(-${calculateScroll(
            scrollY,
            scrollHeight,
            {
              start: [sections.fadeFullOut.start, 0],
              end: [sections.fadeFullOut.end, 200],
            }
          )}%,0, 0)`
        : `translateX(-50%) translate3d(${calculateScroll(
            scrollY,
            scrollHeight,
            {
              start: [sections.fadeFullOut.start, 0],
              end: [sections.fadeFullOut.end, 200],
            }
          )}%,0, 0)`,
    },
  };

  // 공통 스타일
  const sideFadeTextStyle: React.CSSProperties = {
    position: "fixed",
    fontSize: "4rem",
    left: "50%",
  };

  return (
    <div>
      {ratio >= sections.fadeIn.start && ratio <= sections.fadeIn.end && (
        <h1
          style={{ ...sideFadeTextStyle, ...style, ...animationStyles.fadeIn }}
        >
          {children}
        </h1>
      )}
      {ratio >= sections.fadeIn.end && ratio <= sections.fadeFullOut.end && (
        <h1
          style={{
            ...sideFadeTextStyle,
            ...style,
            ...animationStyles.fadeFullOut,
          }}
        >
          {children}
        </h1>
      )}
    </div>
  );
}
