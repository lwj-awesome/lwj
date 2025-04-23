import { calculateScroll } from "@/utils/utils";

interface FadeTextProps {
  startRatio: number;
  endRatio: number;
  children: React.ReactNode;
  scrollHeight: number;
  scrollY: number;
}

export default function FadeText({
  startRatio,
  endRatio,
  children,
  scrollY,
  scrollHeight,
}: FadeTextProps) {
  const ratio = scrollY / scrollHeight;
  if (ratio < startRatio || ratio > endRatio) return null;

  // 애니메이션 구간 설정 0.1 ~ 0.5라면,
  // 임의로 0.1~ (0.1 + 0.25) =0.1 ~ 0.3 ~ 0.5
  // 0.1~ 0.3 in  , 0.3 ~ 0.5 out
  const middleRatio = startRatio + (endRatio - startRatio) / 2;
  const sections = {
    fadeIn: { start: startRatio, end: middleRatio },
    fadeOut: { start: middleRatio, end: endRatio },
  };

  // 애니메이션 값 계산
  const animationStyles = {
    fadeIn: {
      opacity: calculateScroll(scrollY, scrollHeight, {
        start: [sections.fadeIn.start, 0],
        end: [sections.fadeIn.end, 1],
      }),
      transform: `translate3d(0, ${calculateScroll(scrollY, scrollHeight, {
        start: [sections.fadeIn.start, 20],
        end: [sections.fadeIn.end, 0],
      })}%, 0)`,
    },
    fadeOut: {
      opacity: calculateScroll(scrollY, scrollHeight, {
        start: [sections.fadeOut.start, 1],
        end: [sections.fadeOut.end, 0],
      }),
      transform: `translate3d(0, ${calculateScroll(scrollY, scrollHeight, {
        start: [sections.fadeOut.start, 0],
        end: [sections.fadeOut.end, -30],
      })}%, 0)`,
    },
  };

  // 공통 스타일
  const fadeStyle: React.CSSProperties = {
    fontSize: "10vh",
    position: "fixed",
    top: "40vh",
    width: "100vw",
    textAlign: "center",
  };
  return (
    <>
      {ratio >= sections.fadeIn.start && ratio <= sections.fadeIn.end && (
        <h1 style={{ ...fadeStyle, ...animationStyles.fadeIn }}>{children}</h1>
      )}
      {ratio >= sections.fadeOut.start && ratio <= sections.fadeOut.end && (
        <h1 style={{ ...fadeStyle, ...animationStyles.fadeOut }}>{children}</h1>
      )}
    </>
  );
}
