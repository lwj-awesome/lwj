import Project from "../my-project/my-project";

export function Giggy() {
  return (
    <div className="w-full p-custom-gap-xxl">
      <Project href="/detail" className="flex flex-row gap-4 px-custom-gap-xxl">
        <div className="flex justify-center">
          <Project.ImageBox src="/images/nci2.png" />
        </div>
        <div>
          <Project.Title>
            <p>project</p>
            <p>SEP 13, 1993</p>
          </Project.Title>
          <Project.descGroup>
            <Project.desc hasBar>
              Samsung Approach to Digital Product Design: A Seamless Blend of
              UI/UX
            </Project.desc>
            <Project.desc hasBar>
              Samsung Approach to Digital Product Design: A Seamless Blend of
              UI/UX
            </Project.desc>
            <Project.desc hasBar>
              Samsung Approach to Digital Product Design: A Seamless Blend of
              UI/UX
            </Project.desc>
          </Project.descGroup>
        </div>
      </Project>
    </div>
  );
}
