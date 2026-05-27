"use client";

import { useState } from "react";

type Roadmap = {
  title: string;
  desc: string;
  color: string;
  skills: string[];
  phases: {
    title: string;
    items: string[];
  }[];
};

const roadmaps: Roadmap[] = [
  {
    title: "Frontend Developer",
    desc: "HTML, CSS, JavaScript, React, Next.js",
    color: "from-purple-500 to-pink-500",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    phases: [
      {
        title: "Phase 1: Foundations",
        items: [
          "Learn HTML structure, semantic tags, and forms",
          "Master CSS, Flexbox, Grid, and responsive design",
          "Practice JavaScript basics, DOM, events, and arrays",
        ],
      },
      {
        title: "Phase 2: React",
        items: [
          "Understand components, props, state, and hooks",
          "Build reusable UI components",
          "Practice API fetching and conditional rendering",
        ],
      },
      {
        title: "Phase 3: Advanced Frontend",
        items: [
          "Learn Next.js routing and server/client components",
          "Use Tailwind CSS for fast UI development",
          "Build a portfolio and deploy projects on Vercel",
        ],
      },
    ],
  },
  {
    title: "Cloud Engineer",
    desc: "AWS, Linux, Docker, Kubernetes",
    color: "from-blue-500 to-cyan-500",
    skills: ["Linux", "AWS", "Docker", "Kubernetes", "CI/CD"],
    phases: [
      {
        title: "Phase 1: Basics",
        items: [
          "Learn Linux commands and shell basics",
          "Understand networking, ports, DNS, and SSH",
          "Practice Git and GitHub workflow",
        ],
      },
      {
        title: "Phase 2: Cloud Core",
        items: [
          "Learn AWS services like EC2, S3, IAM, and VPC",
          "Deploy a simple website on a cloud server",
          "Understand storage, compute, and security basics",
        ],
      },
      {
        title: "Phase 3: DevOps",
        items: [
          "Learn Docker and containerization",
          "Understand CI/CD pipelines",
          "Explore Kubernetes and monitoring tools",
        ],
      },
    ],
  },
  {
    title: "AI Engineer",
    desc: "Python, ML, Deep Learning, AI Apps",
    color: "from-green-500 to-emerald-500",
    skills: ["Python", "Machine Learning", "LLMs", "TensorFlow", "AI Apps"],
    phases: [
      {
        title: "Phase 1: Python",
        items: [
          "Learn Python syntax, functions, loops, and OOP",
          "Practice data structures and problem solving",
          "Work with NumPy and Pandas basics",
        ],
      },
      {
        title: "Phase 2: Machine Learning",
        items: [
          "Understand supervised and unsupervised learning",
          "Train small ML models using scikit-learn",
          "Learn model evaluation and feature engineering",
        ],
      },
      {
        title: "Phase 3: AI Applications",
        items: [
          "Learn prompts, APIs, and LLM integrations",
          "Build AI-powered apps and chatbots",
          "Create and deploy real AI projects",
        ],
      },
    ],
  },
  {
    title: "Backend Developer",
    desc: "Node.js, APIs, Databases, System Design",
    color: "from-orange-500 to-red-500",
    skills: ["Node.js", "Express", "MongoDB", "SQL", "System Design"],
    phases: [
      {
        title: "Phase 1: Core Backend",
        items: [
          "Learn Node.js runtime and Express basics",
          "Build REST APIs with request/response handling",
          "Understand middleware and routing",
        ],
      },
      {
        title: "Phase 2: Databases",
        items: [
          "Practice MongoDB and SQL fundamentals",
          "Learn CRUD operations and schema design",
          "Connect backend APIs to databases",
        ],
      },
      {
        title: "Phase 3: Production Ready",
        items: [
          "Add authentication and authorization",
          "Learn logging, validation, and error handling",
          "Study system design basics and scaling",
        ],
      },
    ],
  },
];

export default function Roadmaps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);

  if (selectedRoadmap) {
    return (
      <div className="flex-1 min-h-screen bg-black text-white p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={() => setSelectedRoadmap(null)}
            className="mb-8 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition"
          >
            ← Back to Roadmaps
          </button>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 relative overflow-hidden">
            <div
              className={`absolute inset-0 opacity-15 bg-gradient-to-br ${selectedRoadmap.color}`}
            />
            <div className="relative z-10">
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedRoadmap.color} mb-6`}
              />
              <h1 className="text-5xl font-bold mb-4">{selectedRoadmap.title}</h1>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl">
                {selectedRoadmap.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {selectedRoadmap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="grid gap-6">
                {selectedRoadmap.phases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className="rounded-[28px] border border-white/10 bg-black/30 p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h2 className="text-2xl font-semibold">{phase.title}</h2>
                    </div>

                    <ul className="space-y-3 pl-16">
                      {phase.items.map((item) => (
                        <li key={item} className="text-gray-300 list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen bg-black text-white p-10 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Career Roadmaps</h1>
        <p className="text-gray-400 mb-12">
          Explore premium learning paths for top tech careers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmaps.map((roadmap) => (
            <div
              key={roadmap.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8"
            >
              <div
                className={`absolute inset-0 opacity-10 bg-gradient-to-br ${roadmap.color}`}
              />

              <div className="relative z-10">
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${roadmap.color} mb-8`}
                />

                <h2 className="text-3xl font-bold mb-4">{roadmap.title}</h2>
                <p className="text-gray-400 mb-8">{roadmap.desc}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {roadmap.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedRoadmap(roadmap)}
                  className="mt-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
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