import { calculateScroll } from "@/utils/utils";
import React from "react";

interface ComopnentScrollGroupProps {
  startRatio: number;
  endRatio: number;
  children: React.ReactNode;
  scrollHeight: number;
  scrollY: number;
}
const componentGroupStyle: React.CSSProperties = {
  position: "sticky",
  top: "5rem",
};
export default function ComopnentScrollGroup({
  children,
  endRatio,
  scrollHeight,
  scrollY,
  startRatio,
}: ComopnentScrollGroupProps) {
  const ratio = scrollY / scrollHeight;
  if (ratio < startRatio || ratio > endRatio + 0.1) return null;

  const childrenCount = React.Children.count(children);
  const childrenStyles:
    | (React.CSSProperties | undefined)[]
    | { opacity: number; top: string }[] = [];

  let currentStartRatio = startRatio;
  // children의 개수로 끝 - 시작 값을 나눠서 구간을 children개수로 등분
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
        end: [endRatio + 0.2, 0],
      });
      opacity = Math.min(opacity, fadeOut);
    }

    childrenStyles.push({
      opacity,
      transform: `translateY(${translateY}px)`,
      top: `${top}px`,
      left: "50%",
      padding: "1rem",
    });
    currentStartRatio += beforeRatio;
  }
  return (
    <div style={componentGroupStyle}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={childrenStyles[index]}>
          {child}
        </div>
      ))}
    </div>
  );
}
