interface CalculateScrollProps {
  start: number[];
  end: number[];
}

const calculateScroll = (
  scrollY: number,
  height: number,
  values: CalculateScrollProps
) => {
  // 구간이 0.1 ~ 0.3 이고 전체 화면 크기가 100 이라면 ,
  // 애니메이션 구간이 10 ~ 30 이라는 뜻.
  const partScrollStart = values.start[0] * height; //ex) 10
  const partScrollEnd = values.end[0] * height; //ex) 30
  const partScrollHeight = partScrollEnd - partScrollStart; //ex) 20

  if (scrollY < partScrollStart) return values.start[1];
  if (scrollY > partScrollEnd) return values.end[1];

  // 애니메이션 구간 내에서, 애니메이션의 비율 예를들어 opacity가 in인 10 ~ 30까지 구간에서 0 ~ 1 사이 출력
  return (
    ((scrollY - partScrollStart) / partScrollHeight) *
      (values.end[1] - values.start[1]) +
    values.start[1]
  );
};

export { calculateScroll };
