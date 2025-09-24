import { calculateScroll } from "@/utils/utils";
import React from "react";

interface ComponentScrollGroupProps {
  startRatio: number;
  endRatio: number;
  children: React.ReactNode;
  scrollHeight: number;
  scrollY: number;
}

export default function ComponentScrollGroup({
  children,
  endRatio,
  scrollHeight,
  scrollY,
  startRatio,
}: ComponentScrollGroupProps) {
  const childrenCount = React.Children.count(children);
  const childrenStyles:
    | (React.CSSProperties | undefined)[]
    | { opacity: number; top: string }[] = [];

  let currentStartRatio = startRatio;
  // children의 수 로 끝 - 시작 값을 나눠서 구간을 children개수로 등분
  const beforeRatio = (endRatio - startRatio) / childrenCount;
  for (let i = 0; i < childrenCount; i++) {
    let opacity = calculateScroll(scrollY, scrollHeight, {
      start: [currentStartRatio, 0],
      end: [currentStartRatio + beforeRatio, 1],
    });

    const top = calculateScroll(scrollY, scrollHeight, {
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
        end: [endRatio + 0.2, 1],
      });
      opacity = Math.min(opacity, fadeOut);
    }

    childrenStyles.push({
      opacity,
      transform: `translateY(${translateY}px)`,
      top: `${top}px`,
      padding: "10px 0",
    });
    currentStartRatio += beforeRatio;
  }
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={childrenStyles[index]}>
          {child}
        </div>
      ))}
    </div>
  );
}
