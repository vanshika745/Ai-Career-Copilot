const roadmaps = [
  {
    title: "Frontend Developer",
    desc: "HTML, CSS, JavaScript, React, Next.js",
    color: "from-purple-500 to-pink-500",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
    ],
  },

  {
    title: "Cloud Engineer",
    desc: "AWS, Linux, Docker, Kubernetes",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "Linux",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },

  {
    title: "AI Engineer",
    desc: "Python, ML, Deep Learning, AI Apps",
    color: "from-green-500 to-emerald-500",
    skills: [
      "Python",
      "Machine Learning",
      "LLMs",
      "TensorFlow",
    ],
  },

  {
    title: "Backend Developer",
    desc: "Node.js, APIs, Databases, System Design",
    color: "from-orange-500 to-red-500",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
    ],
  },
];

export default function Roadmaps() {
  return (
    <div className="flex-1 min-h-screen bg-black text-white p-10 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Career Roadmaps
        </h1>

        <p className="text-gray-400 mb-12">
          Explore premium learning paths for top tech careers.
        </p>

        <div className="grid grid-cols-2 gap-8">
          {roadmaps.map((roadmap) => (
            <div
              key={roadmap.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 hover:scale-[1.02] transition duration-300"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 opacity-10 bg-gradient-to-br ${roadmap.color}`}
              />

              <div className="relative z-10">
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${roadmap.color} mb-8`}
                />

                <h2 className="text-3xl font-bold mb-4">
                  {roadmap.title}
                </h2>

                <p className="text-gray-400 mb-8">
                  {roadmap.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {roadmap.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <button className="mt-10 bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-2xl font-semibold">
                  View Roadmap
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}