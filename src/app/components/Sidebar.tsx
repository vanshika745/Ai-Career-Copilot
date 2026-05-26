type SidebarProps = {
  activeScreen:
    | "home"
    | "chat"
    | "resume"
    | "roadmaps"
    | "interview"
    | "skills"
    | "auth";
  onOpenHome: () => void;
  onOpenChat: () => void;
  onOpenResume: () => void;
  onOpenRoadmaps: () => void;
  onOpenInterview: () => void;
  onOpenSkills: () => void;
  onOpenAuth: () => void;
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
  const itemBase =
    "w-full text-left rounded-2xl px-4 py-3 transition duration-200";

  return (
    <aside className=" relative w-72 h-screen bg-[#0b0b12] border-r border-white/10 px-5 py-6 flex flex-col justify-between text-white">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold shadow-lg shadow-purple-500/20">
          C
        </div>

        <div>
          <h2 className="font-semibold text-lg leading-tight">Career Copilot</h2>
          <p className="text-xs text-gray-400">AI Powered</p>
        </div>
      </div>

      <nav className="flex-1 space-y-3 relative z-50 overflow-y-auto">
        <button
          type="button"
          onClick={onOpenHome}
          className={`${itemBase} ${
            activeScreen === "home"
              ? "bg-white/10 border border-white/10 text-white"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          Home
        </button>

        <button
          type="button"
          onClick={onOpenChat}
          className={`${itemBase} ${
            activeScreen === "chat"
              ? "bg-white/10 border border-white/10 text-white"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          AI Career Copilot
        </button>

        <button
          type="button"
          onClick={onOpenResume}
          className={`${itemBase} ${
            activeScreen === "resume"
              ? "bg-white/10 border border-white/10 text-white"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          Resume Analyzer
        </button>

        <button
          type="button"
          onClick={onOpenRoadmaps}
          className={`${itemBase} ${
            activeScreen === "roadmaps"
              ? "bg-white/10 border border-white/10 text-white"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          Career Roadmaps
        </button>

        <button
          type="button"
          onClick={onOpenInterview}
          className={`${itemBase} ${
            activeScreen === "interview"
              ? "bg-white/10 border border-white/10 text-white"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          Interview Prep
        </button>

        <button
          type="button"
          onClick={onOpenSkills}
          className={`${itemBase} ${
            activeScreen === "skills"
              ? "bg-white/10 border border-white/10 text-white"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          Skill Tracker
        </button>
      </nav>

     <div className="absolute bottom-5 left-5 right-5">
  <div className="flex items-center gap-3 px-2 mb-5">
    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
      V
    </div>
    <div>
      <p className="text-sm font-medium">Vanshika</p>
      <p className="text-xs text-gray-400">Student</p>
    </div>
  </div>

  <button
    type="button"
    onClick={onOpenAuth}
    className="w-full bg-purple-600 hover:bg-purple-500 transition rounded-2xl py-3 font-semibold"
  >
    Upgrade to Pro
  </button>

  <button
    type="button"
    onClick={onOpenAuth}
    className="w-full mt-3 bg-white/10 hover:bg-white/15 transition rounded-2xl py-3 font-semibold border border-white/10"
  >
    Login / Signup
  </button>
</div>
    </aside>
  );
}