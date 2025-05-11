import Project from "../my-project/my-project";

export function Nci() {
  return (
    <div className="w-[50vw] p-custom-gap-xxl">
      <Project href="/detail/nci">
        <div className="flex justify-center">
          <Project.ImageBox src="/images/nci2.png" />
        </div>
        <Project.Title>
          <p>nc - project</p>
          <p>2023 ~</p>
        </Project.Title>
        <Project.descGroup>
          <Project.desc>
            NCSOFT의 ITSM 서비스, 장애관리 서비스 개발
          </Project.desc>
          <Project.desc>
            고객 니즈에 따른 지속적인 유지 보수 및 고도화 진행
          </Project.desc>
        </Project.descGroup>
      </Project>
    </div>
  );
}
