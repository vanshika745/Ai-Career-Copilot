"use client";

import React from "react";

type SidebarProps = {
  activeSection?: string;
  onNavigate?: (section: string) => void;
  onOpenAuth?: () => void;
  onUpgrade?: () => void;
};

const navItems = [
  "Home",
  "AI Career Copilot",
  "Resume Analyzer",
  "Career Roadmaps",
  "Interview Prep",
  "Skill Tracker",
];

export default function Sidebar({
  activeSection = "AI Career Copilot",
  onNavigate,
  onOpenAuth,
  onUpgrade,
}: SidebarProps) {
  return (
    <aside className="w-80 min-h-screen border-r border-white/10 bg-black text-white flex flex-col justify-between p-5">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white shadow-lg">
            C
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">Career Copilot</h1>
            <p className="text-xs text-gray-400">AI Powered</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => onNavigate?.(item)}
                className={`w-full text-left px-4 py-3 rounded-2xl transition border ${
                  isActive
                    ? "bg-white/15 border-white/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
            V
          </div>
          <div>
            <p className="font-semibold leading-tight">Vanshika</p>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onUpgrade}
          className="w-full mt-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 transition rounded-2xl py-4 font-semibold border border-white/10 shadow-lg"
        >
          Upgrade to Pro
        </button>

        <button
          type="button"
          onClick={onOpenAuth}
          className="w-full mt-3 bg-white/10 hover:bg-white/15 transition rounded-2xl py-4 font-semibold border border-white/10 cursor-pointer"
        >
          Login / Signup
        </button>
      </div>
    </aside>
  );
}