import { BlurMarquee, Text, Detail } from "@/components/ui";
import { ColorDot } from "@/components/ui/color-dot";
import { LogoType } from "@/types/types";
import { DescriptionPart } from "@/components/ui/detail-description/detail-description";
import { CHECK_DATA } from "@/content/detail/nci";
import { KEY_POINT } from "@/content/detail/nsd";
import { LEARN } from "@/content/detail/giggy";

export default function Page() {
  const exceptSkill: LogoType[] = ["Next.js", "Tailwind Css", "MFA"];
  return (
    <main>
      <Detail>
        <Detail.title>ITSM NSD (NC)</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            본 프로젝트는 IT 서비스 운영에 필요한 업무 요청 및 관리 기능을
            효율적으로 지원하기 위해 React 기반으로 개발되었습니다.{" "}
            <ColorDot>*</ColorDot>공통 UI 컴포넌트를
          </Text.subDesc>
          <Text.subDesc>
            적극적으로 활용하여 서비스 전반의 일관성을 확보하고 재사용성을
            높였으며, React Query를 통해 데이터 관리의 안정성을 강화했습니다.
            특히,
          </Text.subDesc>
          <Text.subDesc>
            다양한 업무 유형에 맞춘 요청서 템플릿과 전용 입력 컴포넌트 개발을
            통해 사용자 편의성을 증대시키고 업무 처리 과정을 표준화하는 데
            중점을 두었습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>

      <div className="lg:flex  lg:gap-c-gap-xxl">
        <DescriptionPart
          className="flex-1/2"
          title="Check"
          content={CHECK_DATA}
        />
        <DescriptionPart
          className="flex-1/2"
          title="Key-Point"
          content={KEY_POINT}
        />
      </div>

      <div className="flex gap-c-gap-xxl">
        <DescriptionPart title="Learn" content={LEARN} />
      </div>
      <BlurMarquee exceptSkill={exceptSkill} />
    </main>
  );
}
