"use client";

import { useState } from "react";

export default function AuthScreen() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="flex-1 min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-[36px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="p-10 lg:p-14 bg-gradient-to-br from-purple-600/20 to-blue-600/10 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-purple-300">
            AI Career Copilot
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Start your
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {" "}career journey
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-md">
            Sign in to access resume analysis, roadmaps, interview prep, and your AI career dashboard.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-black/30 border border-white/10 rounded-3xl p-5">
              Resume score, skills, and progress tracking
            </div>

            <div className="bg-black/30 border border-white/10 rounded-3xl p-5">
              Personalized AI roadmaps and mock interviews
            </div>

            <div className="bg-black/30 border border-white/10 rounded-3xl p-5">
              Premium SaaS-style dashboard and chat workspace
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-14 bg-black">
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setMode("login")}
              className={`px-5 py-3 rounded-full font-semibold transition ${
                mode === "login"
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-gray-300"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setMode("signup")}
              className={`px-5 py-3 rounded-full font-semibold transition ${
                mode === "signup"
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-gray-300"
              }`}
            >
              Signup
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-2">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h2>

          <p className="text-gray-400 mb-8">
            {mode === "login"
              ? "Enter your details to continue."
              : "Join now and build your career with AI."}
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className={`w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none placeholder:text-gray-500 ${
                mode === "login" ? "hidden" : "block"
              }`}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none placeholder:text-gray-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none placeholder:text-gray-500"
            />

            <button className="w-full bg-purple-600 hover:bg-purple-500 transition rounded-2xl py-4 font-semibold mt-4">
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            {mode === "login"
              ? "Don’t have an account? Switch to signup."
              : "Already have an account? Switch to login."}
          </p>
        </div>
      </div>
    </div>
  );
}