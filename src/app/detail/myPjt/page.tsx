import { BlurMarquee, Text, Detail, ColorDot } from "@/components/ui";
import { LogoType } from "@/types/types";
import { DescriptionPart } from "@/components/ui/detail-description/detail-description";
import { DETAIL_SECTIONS } from "@/content/detail/mypjt";
import Link from "next/link";

function MyPjtDescription() {
  return (
    <div>
      {DETAIL_SECTIONS.map((section) => (
        <Detail key={section.key}>
          <Detail.title>{section.title}</Detail.title>
          <div className="lg:flex lg:gap-c-gap-xxl">
            <Detail className="flex-1/2">
              {section.data.map((item) => (
                <div key={item.key}>
                  <DescriptionPart
                    title={item.mainTitle}
                    content={item.content}
                  />
                </div>
              ))}
            </Detail>
            <Detail className="flex-1/2">
              {section.images.map((image, index) => (
                <Detail.img
                  key={index}
                  width={image.width}
                  className={image.className}
                  src={image.src}
                />
              ))}
            </Detail>
          </div>
        </Detail>
      ))}
    </div>
  );
}

export default function Page() {
  const exceptSkill: LogoType[] = ["MFA", "React-query", "Recoil"];
  return (
    <main>
      <Detail>
        <Detail.title>포트폴리오 프로젝트</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            이번 프로젝트를 통해 Next.js App Router와 현대적인 웹 개발 패턴들을
            실제로 적용해보며 많은 것을 배울 수 있었습니다. 디자인 토큰부터
            컴포넌트 설계까지, 각각의 기술과 방법론이 어떻게 실제 프로젝트에서
            가치를 발휘하는지 직접 경험했습니다.
          </Text.subDesc>
          <Text.subDesc>
            아직 부족한 점이 많지만, 프로젝트를 하나씩 완성해 갈 때마다 확실히
            성장하고 있다는 것을 느낍니다. 기술적인 깊이뿐만 아니라 문제 해결
            능력, 프로젝트 관리 역량까지 조금씩 향상되고 있습니다.
          </Text.subDesc>
          <Text.subDesc>
            앞으로도 새로운 기술과 방법론에 대한 호기심을 잃지 않고, 각
            프로젝트에서 배운 것들을 다음 프로젝트에 더 발전된 형태로 적용해
            나가며 지속적으로 성장하는 개발자가 되겠습니다.
          </Text.subDesc>
          <ColorDot>
            <Link href={"https://github.com/lwj-awesome/lwj"} target="_blank">
              Github
            </Link>
          </ColorDot>
        </Detail.desc>
      </Detail>
      <MyPjtDescription />
      <BlurMarquee exceptSkill={exceptSkill} />
    </main>
  );
}
