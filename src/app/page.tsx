"use client";

import { useState, type ComponentType } from "react";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import ChatInterface from "./components/ChatInterface";
import ResumeAnalyzer from "./components/ResumeAnalyzer";
import Roadmaps from "./components/Roadmaps";
import InterviewPrep from "./components/InterviewPrep";
import SkillTracker from "./components/SkillTracker";
import AuthScreen from "./components/AuthScreen";

type Screen = "home" | "chat" | "resume" | "roadmaps" | "interview" | "skills";

const AnySidebar = Sidebar as ComponentType<any>;
const AnyLandingPage = LandingPage as ComponentType<any>;
const AnyChatInterface = ChatInterface as ComponentType<any>;
const AnyResumeAnalyzer = ResumeAnalyzer as ComponentType<any>;
const AnyRoadmaps = Roadmaps as ComponentType<any>;
const AnyInterviewPrep = InterviewPrep as ComponentType<any>;
const AnySkillTracker = SkillTracker as ComponentType<any>;
const AnyAuthScreen = AuthScreen as ComponentType<any>;

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [showAuth, setShowAuth] = useState(false);

  const activeScreen =
    screen === "home"
      ? "Home"
      : screen === "chat"
      ? "AI Career Copilot"
      : screen === "resume"
      ? "Resume Analyzer"
      : screen === "roadmaps"
      ? "Career Roadmaps"
      : screen === "interview"
      ? "Interview Prep"
      : "Skill Tracker";

  return (
    <main className="min-h-screen bg-black text-white flex overflow-hidden relative">
      <AnySidebar
        activeScreen={activeScreen}
        onOpenHome={() => setScreen("home")}
        onOpenChat={() => setScreen("chat")}
        onOpenResume={() => setScreen("resume")}
        onOpenRoadmaps={() => setScreen("roadmaps")}
        onOpenInterview={() => setScreen("interview")}
        onOpenSkills={() => setScreen("skills")}
        onOpenAuth={() => setShowAuth(true)}
      />

      <section className="flex-1 relative overflow-hidden">
        {screen === "home" && (
          <AnyLandingPage
            onOpenChat={() => setScreen("chat")}
            onOpenResume={() => setScreen("resume")}
            onOpenRoadmaps={() => setScreen("roadmaps")}
            onOpenInterview={() => setScreen("interview")}
            onOpenSkills={() => setScreen("skills")}
            onOpenAuth={() => setShowAuth(true)}
          />
        )}

        {screen === "chat" && <AnyChatInterface />}
        {screen === "resume" && <AnyResumeAnalyzer />}
        {screen === "roadmaps" && <AnyRoadmaps />}
        {screen === "interview" && <AnyInterviewPrep />}
        {screen === "skills" && <AnySkillTracker />}
      </section>

      {showAuth && (
        <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setShowAuth(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
            >
              ×
            </button>

            <AnyAuthScreen onClose={() => setShowAuth(false)} />
          </div>
        </div>
      )}
    </main>
  );
}