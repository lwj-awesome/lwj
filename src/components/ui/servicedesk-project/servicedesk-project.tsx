import Project from "../my-project/my-project";

export function ServiceDesk() {
  return (
    <div className="w-[50vw] p-custom-gap-xxl">
      <Project href="/detail/nsd">
        <div className="flex justify-center">
          <Project.ImageBox src="/images/servicedesk2.png" />
        </div>
        <Project.Title>
          <p>nc - project</p>
          <p>2022 ~ </p>
        </Project.Title>
        <Project.descGroup>
          <Project.desc>
            업무 요청 및 관리를 위한 ITSM SERVICEDESK 개발 및 운영
          </Project.desc>
          <Project.desc>
            고객 니즈에 따른 지속적인 유지 보수 및 고도화 진행
          </Project.desc>
        </Project.descGroup>
      </Project>
    </div>
  );
}
