type LandingPageProps = {
  onStartChat: () => void;
};

const stats = [
  { label: "Profile Strength", value: "82%" },
  { label: "Resume Score", value: "74%" },
  { label: "Skill Match", value: "68%" },
  { label: "Interview Ready", value: "56%" },
];

const tools = [
  {
    title: "Resume Analyzer",
    desc: "Scan your resume and get AI suggestions instantly.",
  },
  {
    title: "Career Roadmap",
    desc: "Get a personalized learning path for your goals.",
  },
  {
    title: "Mock Interview",
    desc: "Practice interview questions with AI guidance.",
  },
  {
    title: "Project Ideas",
    desc: "Discover practical projects based on your skills.",
  },
];

const quickActions = [
  "Analyze my resume",
  "Give me a roadmap",
  "Suggest projects",
  "Prepare for interview",
];

export default function LandingPage({ onStartChat }: LandingPageProps) {
  return (
    <section className="flex-1 min-h-screen bg-black text-white relative overflow-hidden px-8 py-8">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300">
          AI Powered Career Assistant
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">   
          <div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight ">
              Your Career.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Your Copilot.
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl">
              Get AI-powered guidance for resumes, roadmaps, interviews, and career growth
              in one premium workspace.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button
                onClick={onStartChat}
                className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-full font-semibold hover:scale-[1.03]"
              >
                Get Started
              </button>

              <button className="border border-white/15 hover:bg-white hover:text-black transition px-6 py-3 rounded-full font-semibold hover:scale-[1.03]">
                Learn More
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickActions.map((item) => (
                <button
                  key={item}
                  onClick={onStartChat}
                  className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-400">Live Career Overview</p>
                <h2 className="text-2xl font-semibold mt-1">Your Dashboard</h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold">
                C
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-black/40 border border-white/10 rounded-3xl p-4"
                >
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-3xl font-bold mt-2">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="bg-black/40 border border-white/10 rounded-3xl p-4 hover:bg-white/5 transition"
                >
                  <h3 className="font-semibold">{tool.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{tool.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-black/40 border border-white/10 rounded-3xl p-4">
              <p className="text-sm text-gray-400 mb-3">Latest Activity</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Resume analysis completed</span>
                  <span className="text-green-400">+12%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Frontend roadmap generated</span>
                  <span className="text-blue-400">New</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interview prep suggestions ready</span>
                  <span className="text-purple-400">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}