const stats = [
  {
    title: "Resume Score",
    value: "82%",
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "Skills Completed",
    value: "14",
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "Interviews Done",
    value: "5",
    color: "from-green-500 to-emerald-500",
  },

  {
    title: "Weekly Progress",
    value: "91%",
    color: "from-orange-500 to-red-500",
  },
];

const skills = [
  {
    name: "React.js",
    progress: "85%",
    width: "w-[85%]",
  },

  {
    name: "Next.js",
    progress: "72%",
    width: "w-[72%]",
  },

  {
    name: "Tailwind CSS",
    progress: "90%",
    width: "w-[90%]",
  },

  {
    name: "JavaScript",
    progress: "80%",
    width: "w-[80%]",
  },
];

export default function SkillTracker() {
  return (
    <div className="flex-1 min-h-screen bg-black text-white p-10 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Skill Tracker
        </h1>

        <p className="text-gray-400 mb-12">
          Track your growth, skills and interview readiness.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8"
            >
              <div
                className={`absolute inset-0 opacity-10 bg-gradient-to-br ${stat.color}`}
              />

              <div className="relative z-10">
                <p className="text-gray-400">
                  {stat.title}
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  {stat.value}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <h2 className="text-3xl font-semibold mb-8">
              Skill Progress
            </h2>

            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">
                      {skill.name}
                    </span>

                    <span className="text-gray-400">
                      {skill.progress}
                    </span>
                  </div>

                  <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ${skill.width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <h2 className="text-3xl font-semibold mb-8">
              Recent Activity
            </h2>

            <div className="space-y-5">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                Completed React.js roadmap
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                Uploaded resume for analysis
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                Practiced frontend interview questions
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                Improved ATS score by 12%
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Analytics */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-[32px] p-8">
          <h2 className="text-3xl font-semibold mb-10">
            Weekly Analytics
          </h2>

          <div className="flex items-end gap-6 h-72">
            <div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-3xl h-[40%]" />

            <div className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-t-3xl h-[70%]" />

            <div className="flex-1 bg-gradient-to-t from-green-500 to-emerald-300 rounded-t-3xl h-[55%]" />

            <div className="flex-1 bg-gradient-to-t from-pink-500 to-rose-300 rounded-t-3xl h-[90%]" />

            <div className="flex-1 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-t-3xl h-[65%]" />

            <div className="flex-1 bg-gradient-to-t from-cyan-500 to-sky-300 rounded-t-3xl h-[100%]" />
          </div>

          <div className="flex justify-between mt-5 text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </div>
      </div>
    </div>
  );
}