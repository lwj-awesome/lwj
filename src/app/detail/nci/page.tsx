import {
  Detail,
  ColorDot,
  Text,
  BlurMarquee,
  DescriptionPart,
} from "@/components/ui";
import { LogoType } from "@/types/types";
import {
  CHECK_DATA,
  KEY_POINT_1,
  KEY_POINT_2,
  LEARN_1,
  LEARN_2,
} from "@/content/detail/nci";

export default function Page() {
  const exceptSkill: LogoType[] = ["Tailwind Css"];

  return (
    <main>
      <Detail>
        <Detail.title>ITSM NCI (NC)</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            게임 및 웹 서비스 운영 중 발생하는 장애 상황을
            <ColorDot>*</ColorDot>실시간으로 확인, 추적, 관리하여 선제적인
            대응과 빠른 인지를 가능하게 하는 장애 모니터링 시스템을 Next.js
            기반으로 구축하고, 기존 업무 요청/처리 시스템(NSD)과 통합된 관리자
            페이지를 개발하여 운영 효율성을 극대화하는 것을 목표로
            진행되었습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>

      <DescriptionPart title="Check" content={CHECK_DATA} />
      <DescriptionPart title="Key-Point_1" content={KEY_POINT_1} />
      <DescriptionPart title="Learn_1" content={LEARN_1} />
      <DescriptionPart title="Key-Point_2" content={KEY_POINT_2} />
      <DescriptionPart title="Learn_2" content={LEARN_2} />

      <BlurMarquee exceptSkill={exceptSkill} />
    </main>
  );
}
