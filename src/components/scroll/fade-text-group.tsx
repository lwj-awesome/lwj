import React from "react";
import { calculateScroll } from "@/utils/utils";

interface FadeTextGroupProps {
  startRatio: number;
  endRatio: number;
  children: React.ReactNode;
  scrollHeight: number;
  scrollY: number;
}

export default function FadeTextGroup({
  startRatio,
  endRatio,
  children,
  scrollY,
  scrollHeight,
}: FadeTextGroupProps) {
  const ratio = scrollY / scrollHeight;
  if (ratio < startRatio || ratio > endRatio + 0.1) return null;

  const childrenCount = React.Children.count(children);
  const childrenStyles:
    | (React.CSSProperties | undefined)[]
    | { opacity: number }[] = [];

  let currentStartRatio = startRatio;
  // children의 개수로 끝 - 시작 값을 나눠서 구간을 children개수로 등분
  const beforeRatio = (endRatio - startRatio) / childrenCount;
  for (let i = 0; i < childrenCount; i++) {
    let opacity = calculateScroll(scrollY, scrollHeight, {
      start: [currentStartRatio, 0],
      end: [currentStartRatio + beforeRatio, 1],
    });

    const translateY = calculateScroll(scrollY, scrollHeight, {
      start: [currentStartRatio, 20], // 처음엔 20px 아래
      end: [currentStartRatio + beforeRatio, 0], // 서서히 제자리로 이동
    });

    if (i === childrenCount - 1) {
      const fadeOut = calculateScroll(scrollY, scrollHeight, {
        start: [endRatio, 1],
        end: [endRatio + 0.2, 0],
      });
      opacity = Math.min(opacity, fadeOut);
    }

    if (i >= 1 && childrenStyles[i - 1]!.opacity === 1) {
      childrenStyles[i - 1]!.opacity = calculateScroll(scrollY, scrollHeight, {
        start: [currentStartRatio, 1],
        end: [currentStartRatio + beforeRatio, 0.2],
      });
    }
    childrenStyles.push({
      opacity,
      transform: `translateY(${translateY}px)`,
    });
    currentStartRatio += beforeRatio;
  }

  const fadeTextGroupStyle: React.CSSProperties = {
    position: "sticky",
    top: "10vh",
  };
  return (
    <div style={fadeTextGroupStyle}>
      {React.Children.map(children, (child, index) => (
        <h1 key={index} style={childrenStyles[index]}>
          {child}
        </h1>
      ))}
    </div>
  );
}
