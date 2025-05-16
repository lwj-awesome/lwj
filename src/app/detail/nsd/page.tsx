export default function Page() {
  return (
    <div className="m-[200px]">
      <div className="min-h-screen  text-white p-10 font-sans">
        <div className="grid grid-cols-2 gap-6">
          {/* 1. Career History */}

          <div className="flex flex-col gap-4">
            <div
              className={`rounded-lg p-4
               bg-[#1a1a1a]`}
            >
              <p className="text-sm text-gray-300">2014-2016</p>
              <p className="font-semibold">WebSolutions Co.</p>
              <p className="text-sm text-gray-400">
                Junior Full Stack Developer
              </p>
            </div>
            <div
              className={`rounded-lg p-4
               bg-[#1a1a1a]`}
            >
              <p className="text-sm text-gray-300">2014-2016</p>
              <p className="font-semibold">WebSolutions Co.</p>
              <p className="text-sm text-gray-400">
                Junior Full Stack Developer
              </p>
            </div>
          </div>

          {/* 3. Introduction Card */}
          <div className="bg-[#B5895A] text-black rounded-xl p-6 flex gap-4 items-start">
            <div className="text-4xl">🧑‍💻</div>
            <div>
              <h2 className="text-xl font-bold">James Parker</h2>
              <p className="mt-2 text-sm">
                Experienced full stack developer skilled in crafting web
                applications that combine sleek front-end design with robust
                back-end functionality.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Bottom Section: Summary + Stack */}
        <div className="grid grid-cols-1 gap-6 mt-6">
          {/* Experience Summary */}

          {/* Stack */}
          <div className="bg-[#121212] rounded-xl p-6">
            <h3 className="text-center text-lg font-semibold mb-4">My Stack</h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {[
                { name: "GraphQL", desc: "Query Language" },
                { name: "Typescript", desc: "Typed JavaScript" },
                { name: "Next.js", desc: "React Framework" },
                { name: "MongoDB", desc: "Database" },
                { name: "Docker", desc: "Containerization Tool" },
                { name: "Node.js", desc: "JavaScript Runtime" },
              ].map((tech, i) => (
                <div key={i} className="bg-[#1a1a1a] p-3 rounded-md">
                  <p className="font-semibold">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
