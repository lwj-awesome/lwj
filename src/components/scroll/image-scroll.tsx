import React from "react";
import { calculateScroll } from "@/utils/utils";

interface ImageScrollProps {
  startRatio: number;
  endRatio: number;
  scrollHeight: number;
  scrollY: number;
  src?: string;
}

export default function ImageScroll({
  startRatio,
  endRatio,
  scrollY,
  scrollHeight,
  src,
}: ImageScrollProps) {
  // 지금 현재 스크롤 위치의 비율
  const ratio = scrollY / scrollHeight;
  // 애니메이션 구간 설정 0.1 ~ 0.5라면,
  // 임의로 0.1~ (0.1 + 0.25) =0.1 ~ 0.3 ~ 0.5
  // 0.1~ 0.3 in  , 0.3 ~ 0.5 out
  //
  const lastMiddleRatio = startRatio + (endRatio - startRatio) / 2;
  const secondMiddleRatio = startRatio + (lastMiddleRatio - startRatio) / 2;
  const firstMiddleRatio = startRatio + (secondMiddleRatio - startRatio) / 2;
  const sections = {
    fadeIn: { start: startRatio, end: firstMiddleRatio },
    secondFadeIn: { start: firstMiddleRatio, end: secondMiddleRatio },
    ThirdFadeIn: { start: secondMiddleRatio, end: lastMiddleRatio },
    fadeOut: { start: lastMiddleRatio, end: endRatio },
  };

  // 애니메이션 값 계산
  const animationStyles = {
    fadeIn: {
      height: `1vh`,
      width: `${Math.min(
        calculateScroll(scrollY, scrollHeight, {
          start: [sections.fadeIn.start, 0],
          end: [sections.fadeIn.end, 1],
        }) * 100,
        50
      )}%`,
    },
    secondFadeIn: {
      height: `${Math.min(
        calculateScroll(scrollY, scrollHeight, {
          start: [sections.secondFadeIn.start, 0],
          end: [sections.secondFadeIn.end, 1],
        }) * 100
      )}%`,
      width: `50%`,
    },
    ThirdFadeIn: {
      height: `99%`,
      width: `${Math.max(
        calculateScroll(scrollY, scrollHeight, {
          start: [sections.ThirdFadeIn.start, 0],
          end: [sections.ThirdFadeIn.end, 1],
        }) * 100,
        50
      )}%`,
    },
    out: {
      height: `100%`,
      width: `100%`,
      opacity: calculateScroll(scrollY, scrollHeight, {
        start: [sections.fadeOut.start, 1],
        end: [sections.fadeOut.end, 0],
      }),
    },
  };
  // 공통 스타일
  const imageScrollStyle: React.CSSProperties = {
    position: "fixed",
    top: "50vh",
    left: "50vw",
    transform: "translate(-50%, -50%)",
    zIndex: -2,
    clipPath: "view-box",
  };
  return (
    <div>
      {ratio >= sections.fadeIn.start && ratio <= sections.fadeIn.end && (
        <img
          src={src}
          alt=""
          style={{ ...imageScrollStyle, ...animationStyles.fadeIn }}
        />
      )}
      {ratio >= sections.secondFadeIn.start &&
        ratio <= sections.secondFadeIn.end && (
          <img
            src={src}
            alt=""
            style={{ ...imageScrollStyle, ...animationStyles.secondFadeIn }}
          />
        )}
      {ratio >= sections.secondFadeIn.end &&
        ratio <= sections.ThirdFadeIn.end && (
          <img
            src={src}
            alt=""
            style={{ ...imageScrollStyle, ...animationStyles.ThirdFadeIn }}
          />
        )}
      {ratio >= sections.ThirdFadeIn.end &&
        ratio <= sections.ThirdFadeIn.end && (
          <img
            src={src}
            alt=""
            style={{ ...imageScrollStyle, ...animationStyles.ThirdFadeIn }}
          />
        )}
      {ratio >= sections.fadeOut.start && (
        <img
          src={src}
          alt=""
          style={{ ...imageScrollStyle, ...animationStyles.out }}
        />
      )}
    </div>
  );
}
