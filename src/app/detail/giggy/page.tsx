import { BlurMarquee } from "@/components/ui/marquee/marquee";
import Text from "@/components/atom/text-module/text-module";
import { Detail } from "@/components/ui/detail-item/detail-item";
import { LogoType } from "@/types/types";

function MainPage() {
  return (
    <Detail>
      <Detail.title>메인 페이지</Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail className="flex-1/2">
          <Detail.desc>
            <Text.subDesc>
              사용자의 개인 정보 또는 회사의 일자리 정보를 담은 네임카드를 직접
              설정하고 관리할 수 있는 페이지입니다.
            </Text.subDesc>
            <Text.subDesc>
              달력 기능을 통해 면접 일정이나 중요한 구직/구인 관련 일정을 관리할
              수 있으며, 알림 시스템을 통해 새로운 매칭 알림이나 지원 현황을
              실시간으로 확인할 수 있습니다. 또한 현재 진행 중인 매칭 프로세스의
              단계별 진행 상황을 시각적으로 보여주는 프로그레스 바를 제공하여,
              사용자가 자신의 구인구직 활동 전반을 한눈에 파악하고 효율적으로
              관리할 수 있도록 구성했습니다. 이를 통해 개인 맞춤형 구인구직 허브
              역할을 수행하는 페이지입니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
        <Detail className="flex-1/2">
          <Detail.img
            width={800}
            clasName="w-full"
            src="/images/giggy/giggy-home.png"
          />
        </Detail>
      </div>
    </Detail>
  );
}

function ProfilePage() {
  return (
    <Detail>
      <Detail.title>프로필 페이지</Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail>
          <Detail.img
            width={600}
            clasName="w-full"
            src="/images/giggy/giggy-setting.png"
          />
        </Detail>
        <Detail>
          <Detail.desc>
            <Text.subDesc>
              메인 페이지입니다. 호주 현지 구인구직 뉴스와 구직자 혹은
              구인자에게 추천하는 인재 및 일자리 정보를 한눈에 볼 수 있도록
              간단한 네임 카드 형태로 구성했습니다.
            </Text.subDesc>
            <Text.subDesc>
              UI는 모바일 환경을 우선적으로 고려한 웹뷰 디자인으로 개발하여
              반응형 웹 서비스를 제공하며, 데스크톱 환경에서는 화면 양쪽
              사이드에 광고 배너 영역을 배치하여 향후 광고 수익 모델을 구축할 수
              있도록 설계했습니다.
            </Text.subDesc>
            <Text.subDesc>
              이를 통해 사용자는 어떤 디바이스에서든 일관된 사용자 경험을 받을
              수 있으며, 동시에 지속 가능한 서비스 운영을 위한 수익 구조도 함께
              고려한 설계입니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
      </div>
    </Detail>
  );
}

function MatchingPage() {
  return (
    <Detail>
      <Detail.title>매칭 프로그레스</Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail className="flex-1/2 ">
          <Detail.desc>
            <Text.subDesc>
              매칭 프로그레스 페이지입니다. 구인자의 경우 연결된 구직자와의 매칭
              정보를 상세히 확인할 수 있으며, 구직자의 경우 연결된 업체와의 매칭
              현황을 실시간으로 모니터링할 수 있는 화면입니다.
            </Text.subDesc>
            <Text.subDesc>
              각 매칭의 진행 단계별 상태를 시각적으로 표시하여 현재 어느 단계에
              있는지 명확하게 파악할 수 있으며, 상호 간의 관심도, 면접 일정,
              최종 결과 등의 정보를 실시간으로 업데이트하여 제공합니다.
            </Text.subDesc>
            <Text.subDesc>
              이를 통해 사용자는 여러 매칭을 동시에 진행하면서도 각각의 진행
              상황을 체계적으로 관리하고, 다음 단계로의 진행을 위한 필요한
              액션을 놓치지 않도록 지원하는 페이지입니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
        <Detail className="flex-1/2">
          <Detail.img
            width={300}
            clasName="w-full"
            src="/images/giggy/giggy-matching.png"
          />
        </Detail>
      </div>
    </Detail>
  );
}
function CreateArticle() {
  return (
    <Detail>
      <Detail.title>구인 등록 페이지</Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail>
          <Detail.img
            width={600}
            clasName="w-full"
            src="/images/giggy/giggy-regist.png"
          />
        </Detail>
        <Detail>
          <Detail.desc>
            <Text.subDesc>
              구인자가 작성할 수 있는 페이지입니다. 이 페이지를 통해 구인
              게시글을 등록할 수 있으며, casual job과 정규직 등 고용 형태를
              명확히 구분하여 선택할 수 있도록 구성했습니다.
            </Text.subDesc>
            <Text.subDesc>
              구직자들이 일자리의 성격을 한눈에 파악할 수 있도록 고용 유형별로
              카테고리를 분류하여, 단기간 유연한 근무를 원하는 경우에는 casual
              job을, 안정적인 장기 근무를 원하는 경우에는 정규직 포지션을 쉽게
              찾을 수 있게 했습니다.
            </Text.subDesc>
            <Text.subDesc>
              이를 통해 구인자는 원하는 고용 형태에 맞는 적합한 인재를
              효과적으로 모집할 수 있으며, 구직자 또한 자신의 근무 조건과 맞는
              일자리를 보다 정확하게 찾을 수 있도록 지원하는 페이지입니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
      </div>
    </Detail>
  );
}
function Learn() {
  return (
    <Detail>
      <Detail.title>Learn</Detail.title>
      <div className="lg:flex flex-col lg:gap-c-gap-xxl">
        <Detail.desc>
          <Text.subTitle>프로젝트 전체를 경험하다</Text.subTitle>
          <Text.subDesc>
            아무것도 없는 상태에서 시작한 프로젝트를 통해 정말 많은 걸
            배웠습니다. 호주에 살고 있는 친구들이 이런 서비스가 호주에 없는데,
            있으면 좋겠다는 간단한 생각으로 시작해, 정해진 틀이 없는 상황에서
            처음부터 하나씩 만들어가며 서비스를 개발하는 전체 과정을 경험할 수
            있었습니다.
          </Text.subDesc>
        </Detail.desc>
        <Detail.desc>
          <Text.subTitle>팀원들과의 소통 강화</Text.subTitle>
          <Text.subDesc>
            호주에서 함께 기획한 팀원들이 타일공, 간호사같이 기획 전문가가 아닌
            각자 다른 일을 하는 사람들이었습니다. 전문가가 아닌 이들과 소통하고
            협업하는 것이 쉽지 않았지만, 기술적인 설명과 전체적으로 모든 것들이
            논리적으로 이어져야하는 이유 등을 설명하며 잘 헤쳐나갔던것 같습니다.
            이런 경험이 실무에서 여러 타입의 기획자들과 일할 때도 큰 도움이 될
            것 같습니다. 또한, 기획 과정에 직접 깊게 참여해보니, 기획이 정말
            어렵고 복잡한 일이라는 걸 알게 됐습니다. 이를통해 기획자의 입장을 좀
            더 이해할 수 있게 되었습니다.
          </Text.subDesc>
        </Detail.desc>
        <Detail.desc>
          <Text.subTitle> 문제 해결, 의사 결정 능력</Text.subTitle>
          <Text.subDesc>
            기능 추가와 정책 개발 업무를 하면서 진짜 문제가 뭘까?, 어떻게
            해결할까? 를 끊임없이 고민했습니다. 크고 작은 의사결정을 내려야 하는
            순간들이 많았는데, 이런 경험들이 쌓여 문제 해결과 의사결정 역량을
            기르는 데 도움이 되었습니다.
          </Text.subDesc>
        </Detail.desc>
        <Detail.desc>
          <Text.subDesc>
            아직 출시하지는 못했지만, 출시한 후에 실제 사용자들의 반응을 보고
            피드백을 받으면서 다시 문제를 찾고 개선해나가는 과정을 겪게 되면,
            단순히 코딩만 하는 개발자가 아닌 진짜 개발자다운 종합적인 능력을 더
            키울 수 있을 거라고 생각합니다.
          </Text.subDesc>
        </Detail.desc>
      </div>
    </Detail>
  );
}
export default function Page() {
  const exceptSkill: LogoType[] = ["MFA", "React-query", "Recoil"];
  return (
    <>
      <Detail>
        <Detail.title>호주 현지 구인 / 구직 서비스 GIGGY</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            호주 내 구인 및 구직 연결을 효율적으로 지원하기 위해 Next.js App
            Router 기반으로 개발된 프로젝트입니다. 디자인 토큰과 shadcn/ui를
            활용한 공통 컴포넌트로 서비스 전반의 일관성을 확보하고, 호주
            현지인과의 회의를 통해 수집한 요구사항을 반영하여 직관적인 사용자
            경험을 제공했습니다.
          </Text.subDesc>
          <Text.subDesc>
            현재 매주 정기적인 기획회의와 개발회의를 통해 프로젝트를 체계적으로
            진행하고 있으며, 팀원들과의 지속적인 커뮤니케이션을 바탕으로 개발
            일정을 관리하고 있습니다. 올해 말까지 실제 서비스 배포를 완료하여
            호주 현지 고객들에게 직접 서비스를 제공하고 사용자 피드백을 수집하는
            것을 목표로 하고 있습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>
      <MainPage />
      <ProfilePage />
      <MatchingPage />
      <CreateArticle />
      <Learn />
      <BlurMarquee exceptSkill={exceptSkill} />
    </>
  );
}
