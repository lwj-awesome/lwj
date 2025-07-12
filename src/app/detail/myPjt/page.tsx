import { BlurMarquee } from "@/components/ui/marquee/marquee";
import Text from "@/components/atom/text-module/text-module";
import { Detail } from "@/components/ui/detail-item/detail-item";
import { ColorDot } from "@/components/atom/color-dot";
import { LogoType } from "@/types/types";

function Token() {
  return (
    <Detail>
      <Detail.title>1. 디자인 토큰을 활용한 일관성 있는 스타일링</Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail className="flex-1/2">
          <Detail.title>Check</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 프로젝트 초기 디자인 시스템 설계 및 토큰
              정의
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 색상, 타이포그래피, 간격 등 핵심 디자인
              요소 토큰화
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot>컴포넌트별 디자인 토큰 적용
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 디자인 변경 시 토큰 수정을 통한 일괄 적용
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>keyPoint</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>일관성 있는 UI/UX</ColorDot>: 모든 컴포넌트가 동일한
              디자인 규칙을 따라 통일성 있는 사용자 경험 제공
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>효율적인 유지보수</ColorDot>: 디자인 변경 시 토큰 값만
              수정하면 전체 프로젝트에 일괄 적용
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>확장 가능한 디자인 시스템</ColorDot>: 새로운 컴포넌트
              추가 시에도 기존 토큰을 활용하여 빠른 개발 가능
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>Learn</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>디자인 토큰</ColorDot>의 중요성과 실제 프로젝트에서의
              효과를 직접 체험했습니다. 특히 프로젝트 후반부에 디자인 수정이
              필요할 때, 토큰 기반 접근법이 얼마나 효율적인지 실감했습니다.
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>디자인 시스템 구축의 필요성</ColorDot>: 디자이너와의
              긴밀한 협업을 통해 컬러 팔레트, 타이포그래피, 인터랙션 규칙 등
              디자인 시스템의 기반을 마련하고 이를 코드에 반영함으로써 일관된
              UI를 구현하고 팀 내 디자인 가이드라인을 확립할 수 있었습니다.
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>디자인 시스템</ColorDot>은 단순히 스타일링을 위한 도구가
              아니라, 프로젝트의 생산성과 일관성을 높이는 핵심 인프라임을
              이해했습니다
            </Text.subDesc>
          </Detail.desc>
        </Detail>
        <Detail className="flex-1/2">
          <Detail.img width={500} clasName="w-full" src="/images/token.png" />
        </Detail>
      </div>
    </Detail>
  );
}

function ScrollEvent() {
  return (
    <Detail>
      <Detail.title>
        2. 수학적 계산 기반 스크롤 애니메이션 순수 구현
      </Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail className="flex-1/2">
          <Detail.title>Check</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 애니메이션 구간을 정확히 분할하는 ratio
              기반 시스템 구축
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot>fadeIn/fadeOut 구간을 자동으로 계산하는
              알고리즘 개발
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot>opacity와 transform 값을 동시에 제어하는
              복합 애니메이션 구현
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot>성능 최적화를 위한 조건부 렌더링 로직 적용
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>keyPoint</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>부드러운 사용자 경험</ColorDot>: opacity와 translateY를
              조합한 자연스러운 fade 애니메이션
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>정밀한 애니메이션 제어</ColorDot>: ratio 기반 계산으로
              스크롤 위치에 따른 정확한 애니메이션 타이밍 구현
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>수학적 접근법</ColorDot>: 스크롤 기반 애니메이션으로
              인터랙티브한 웹 경험 제공
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>재사용 가능한 컴포넌트</ColorDot>: : props로 애니메이션
              구간을 자유롭게 설정할 수 있는 유연한 설계
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>Learn</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>라이브러리에 의존하지 않고</ColorDot>라이브러리 없이
              순수 JavaScript와 수학적 계산만으로도 고품질의 스크롤 애니메이션을
              구현할 수 있다는 것을 깨달았습니다. calculateScroll 유틸 함수를
              통해 복잡한 애니메이션 값 계산을 체계적으로 관리할 수 있었습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
        <Detail className="flex-1/2">
          <Detail.img width={500} clasName="w-full" src="/images/scroll.png" />
          <Detail.img
            width={500}
            clasName="w-full"
            src="/images/caculate.png"
          />
        </Detail>
      </div>
    </Detail>
  );
}
function Repo() {
  return (
    <Detail>
      <Detail.title>3. 체계적인 프로젝트 관리 및 폴더 구조 설계</Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail className="flex-1/2">
          <Detail.title>Check</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 기능별/도메인별 폴더 구조 설계 및 적용
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot>컴포넌트, 훅, 유틸리티, 타입 등 역할별 파일
              분류
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot>Next.js App Router 구조에 맞는 페이지 및
              레이아웃 구성
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>keyPoint</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>명확한 관심사 분리</ColorDot>: o기능별/계층별로 명확하게
              구분된 폴더 구조로 코드 가독성 향상
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>확장성 고려</ColorDot>: 새로운 기능 추가 시에도 기존
              구조를 해치지 않는 유연한 설계
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>개발 효율성</ColorDot>: 일관된 폴더 구조로 파일 탐색
              시간 단축 및 개발 생산성 향상
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>Learn</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              프로젝트 초기에 폴더 구조를 충분히 고민하고 설계하는 것이
              장기적으로 얼마나 중요한지 깨달았습니다. 중간에 구조를 변경하는
              것은 매우 큰 비용이 든다는 것을 배웠습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
        <Detail className="flex-1/2">
          <Detail.img width={500} clasName="w-full" src="/images/tree.png" />
        </Detail>
      </div>
    </Detail>
  );
}
function Compound() {
  return (
    <Detail>
      <Detail.title>
        4. Compound Pattern을 활용한 모듈화된 컴포넌트 설계
      </Detail.title>
      <div className="lg:flex lg:gap-c-gap-xxl">
        <Detail className="flex-1/2">
          <Detail.title>Check</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 메인 컴포넌트(Detail)와 서브 컴포넌트들
              간의 관계 정의
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot>각 서브 컴포넌트의 독립적 기능과 일관된
              스타일링 구현
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 다양한 레이아웃 조합을 위한 유연한 구조
              구축
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>keyPoint</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>직관적인 사용법</ColorDot>: Detail.title, Detail.desc,
              Detail.img와 같은 dot notation으로 명확한 컴포넌트 구조 제공
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>높은 재사용성</ColorDot>: 각 서브 컴포넌트를 독립적으로
              사용하거나 자유롭게 조합하여 다양한 레이아웃 구성 가능
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>일관된 디자인</ColorDot>:공통 스타일링(gap, margin 등)을
              메인 컴포넌트에서 관리하여 UI 통일성 확보
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>확장 가능한 구조</ColorDot>: 새로운 서브 컴포넌트 추가
              시 기존 패턴을 따라 쉽게 확장 가능
            </Text.subDesc>
          </Detail.desc>
          <Detail.title>Learn</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>Compound Pattern</ColorDot>이 단순히 컴포넌트를 분리하는
              것이 아니라, 사용자에게 더 직관적이고 유연한 API를 제공하는 설계
              패턴임을 깨달았습니다. Detail.title, Detail.desc 같은 네이밍으로
              컴포넌트의 역할이 명확해졌습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
        <Detail className="flex-1/2">
          <Detail.img
            width={600}
            clasName="w-full"
            src="/images/component.png"
          />
        </Detail>
      </div>
    </Detail>
  );
}

export default function Page() {
  const exceptSkill: LogoType[] = ["MFA", "React-query", "Recoil"];
  return (
    <>
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
        </Detail.desc>
      </Detail>
      <Token />
      <ScrollEvent />
      <Repo />
      <Compound />
      <BlurMarquee exceptSkill={exceptSkill} />
    </>
  );
}
