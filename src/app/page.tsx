"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import ChatInterface from "./components/ChatInterface";
import ResumeAnalyzer from "./components/ResumeAnalyzer";
import Roadmaps from "./components/Roadmaps";
import InterviewPrep from "./components/InterviewPrep";
import SkillTracker from "./components/SkillTracker";
import AuthScreen from "./components/AuthScreen";

type Screen =
  | "home"
  | "chat"
  | "resume"
  | "roadmaps"
  | "interview"
  | "skills"
  | "auth";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <main className="min-h-screen bg-black text-white flex overflow-hidden">
      <Sidebar
        activeScreen={screen}
        onOpenHome={() => setScreen("home")}
        onOpenChat={() => setScreen("chat")}
        onOpenResume={() => setScreen("resume")}
        onOpenRoadmaps={() => setScreen("roadmaps")}
        onOpenInterview={() => setScreen("interview")}
        onOpenSkills={() => setScreen("skills")}
        onOpenAuth={() => setScreen("auth")}
      />

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {screen === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <LandingPage onStartChat={() => setScreen("chat")} />
            </motion.div>
          )}

          {screen === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
            >
              <ChatInterface />
            </motion.div>
          )}

          {screen === "resume" && (
            <motion.div
              key="resume"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <ResumeAnalyzer />
            </motion.div>
          )}

          {screen === "roadmaps" && (
            <motion.div
              key="roadmaps"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <Roadmaps />
            </motion.div>
          )}

          {screen === "interview" && (
            <motion.div
              key="interview"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <InterviewPrep />
            </motion.div>
          )}

          {screen === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <SkillTracker />
            </motion.div>
          )}

          {screen === "auth" && (
            <motion.div
              key="auth"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <AuthScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}