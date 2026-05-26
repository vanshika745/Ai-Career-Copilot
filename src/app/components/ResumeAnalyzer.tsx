"use client";

import { useState } from "react";

export default function ResumeAnalyzer() {
  const [fileName, setFileName] =
    useState("");

  const [uploaded, setUploaded] =
    useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
      setUploaded(true);
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-black text-white p-10 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Resume Analyzer
        </h1>

        <p className="text-gray-400 mb-10">
          Upload your resume and get AI-powered insights.
        </p>

        {/* Upload Box */}
        <label className="border-2 border-dashed border-white/10 rounded-[32px] p-20 text-center bg-white/5 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition">
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center text-4xl mb-6">
            ↑
          </div>

          <h2 className="text-3xl font-semibold">
            Drag & Drop Resume
          </h2>

          <p className="text-gray-400 mt-4">
            Upload PDF resume for AI analysis
          </p>

          <button className="mt-8 bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-2xl font-semibold">
            Upload Resume
          </button>
        </label>

        {/* Uploaded File */}
        {uploaded && (
          <div className="mt-10 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-gray-400 text-sm mb-2">
                Uploaded Resume
              </p>

              <h3 className="text-2xl font-semibold">
                {fileName}
              </h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <p className="text-gray-400">
                  ATS Score
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  82%
                </h2>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <p className="text-gray-400">
                  Readability
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  91%
                </h2>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <p className="text-gray-400">
                  Skills Match
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  74%
                </h2>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <p className="text-gray-400">
                  Overall Score
                </p>

                <h2 className="text-5xl font-bold mt-3 text-purple-400">
                  B+
                </h2>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-6">
                Detected Skills
              </h2>

              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-full bg-purple-600/20 border border-purple-500/20">
                  React.js
                </div>

                <div className="px-5 py-3 rounded-full bg-blue-600/20 border border-blue-500/20">
                  Next.js
                </div>

                <div className="px-5 py-3 rounded-full bg-green-600/20 border border-green-500/20">
                  Tailwind CSS
                </div>

                <div className="px-5 py-3 rounded-full bg-pink-600/20 border border-pink-500/20">
                  JavaScript
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-6">
                AI Suggestions
              </h2>

              <div className="space-y-5">
                <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                  Add more quantified achievements in projects.
                </div>

                <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                  Improve ATS keywords for frontend roles.
                </div>

                <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                  Add GitHub and LinkedIn profile links.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}