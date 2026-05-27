"use client";

type SidebarProps = {
  activeScreen?: string;
  onOpenHome?: () => void;
  onOpenChat?: () => void;
  onOpenResume?: () => void;
  onOpenRoadmaps?: () => void;
  onOpenInterview?: () => void;
  onOpenSkills?: () => void;
  onOpenAuth?: () => void;
};

export default function Sidebar({
  activeScreen,
  onOpenHome,
  onOpenChat,
  onOpenResume,
  onOpenRoadmaps,
  onOpenInterview,
  onOpenSkills,
  onOpenAuth,
}: SidebarProps) {
  return (
    <aside className="w-72 min-h-screen bg-[#0b0b0b] border-r border-white/10 p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-8 text-white">
          AI Career Copilot
        </h1>

        <div className="space-y-3">
          <button
            onClick={onOpenHome}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeScreen === "Home"
                ? "bg-purple-600 text-white"
                : "bg-white/5 hover:bg-white/10 text-white"
            }`}
          >
            Home
          </button>

          <button
            onClick={onOpenChat}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeScreen === "AI Career Copilot"
                ? "bg-purple-600 text-white"
                : "bg-white/5 hover:bg-white/10 text-white"
            }`}
          >
            AI Career Copilot
          </button>

          <button
            onClick={onOpenResume}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeScreen === "Resume Analyzer"
                ? "bg-purple-600 text-white"
                : "bg-white/5 hover:bg-white/10 text-white"
            }`}
          >
            Resume Analyzer
          </button>

          <button
            onClick={onOpenRoadmaps}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeScreen === "Career Roadmaps"
                ? "bg-purple-600 text-white"
                : "bg-white/5 hover:bg-white/10 text-white"
            }`}
          >
            Career Roadmaps
          </button>

          <button
            onClick={onOpenInterview}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeScreen === "Interview Prep"
                ? "bg-purple-600 text-white"
                : "bg-white/5 hover:bg-white/10 text-white"
            }`}
          >
            Interview Prep
          </button>

          <button
            onClick={onOpenSkills}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeScreen === "Skill Tracker"
                ? "bg-purple-600 text-white"
                : "bg-white/5 hover:bg-white/10 text-white"
            }`}
          >
            Skill Tracker
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            V
          </div>

          <div>
            <p className="text-white font-medium">Vanshika</p>
            <p className="text-sm text-gray-400">Student</p>
          </div>
        </div>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition">
          Upgrade to Pro
        </button>

        <button
          onClick={onOpenAuth}
          className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white transition"
        >
          Login / Signup
        </button>
      </div>
    </aside>
  );
}