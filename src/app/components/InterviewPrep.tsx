"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import jsPDF from "jspdf";

type Role = {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
};

type Difficulty = "easy" | "medium" | "hard";

type AnswerCard = {
  question: string;
  answer: string;
  feedback: string;
  score: number;
};

const roles: Role[] = [
  {
    id: "frontend",
    title: "Frontend Developer",
    subtitle: "UI, React, Next.js, and CSS",
    accent: "from-purple-500 to-pink-500",
  },
  {
    id: "backend",
    title: "Backend Developer",
    subtitle: "APIs, databases, architecture",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "cloud",
    title: "Cloud Engineer",
    subtitle: "AWS, Linux, Docker, deployment",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "python",
    title: "Python Developer",
    subtitle: "Logic, automation, scripting",
    accent: "from-orange-500 to-amber-500",
  },
];

const questionBank: Record<string, string[]> = {
  frontend: [
    "Tell me about yourself and why you want frontend development.",
    "How do you make a website responsive across different devices?",
    "What is the difference between state and props in React?",
    "Explain a project where you improved the UI or user experience.",
  ],
  backend: [
    "Tell me about yourself and why you want backend development.",
    "How do you design a REST API for a simple task management app?",
    "What is the difference between SQL and NoSQL databases?",
    "Explain how you would handle authentication in an API.",
  ],
  cloud: [
    "Tell me about yourself and why you want cloud engineering.",
    "What is the difference between Docker and virtual machines?",
    "How would you deploy a web app on AWS?",
    "Explain CI/CD in simple terms.",
  ],
  python: [
    "Tell me about yourself and why you want to work with Python.",
    "How do you write clean and readable Python code?",
    "What is the difference between a list and a tuple?",
    "Explain a Python project you built or practiced.",
  ],
};

function getTimerForDifficulty(difficulty: Difficulty) {
  if (difficulty === "easy") return 240;
  if (difficulty === "hard") return 420;
  return 300;
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function getFeedback(answer: string, difficulty: Difficulty) {
  const trimmed = answer.trim();
  const words = trimmed.split(/\s+/).filter(Boolean).length;

  if (!trimmed) {
    return {
      feedback: "Answer is empty. Try to explain your thought process clearly.",
      score: 0,
    };
  }

  if (words < 20) {
    return {
      feedback: "Good start, but add more detail, structure, and one example.",
      score: difficulty === "hard" ? 42 : 48,
    };
  }

  if (words < 45) {
    return {
      feedback:
        "Nice answer. Add a small real-life example and make the ending stronger.",
      score: difficulty === "hard" ? 62 : 68,
    };
  }

  return {
    feedback:
      "Strong answer. You explained it well. Add one more technical detail for a premium response.",
    score: difficulty === "hard" ? 78 : 84,
  };
}

export default function InterviewPrep() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState<AnswerCard[]>([]);
  const [timeLeft, setTimeLeft] = useState(getTimerForDifficulty("medium"));
  const [isFinished, setIsFinished] = useState(false);

  const reportRef = useRef<HTMLDivElement | null>(null);

  const questions = useMemo(() => {
    if (!selectedRole) return [];
    return questionBank[selectedRole.id] || [];
  }, [selectedRole]);

  const currentQuestion = questions[currentQuestionIndex] || "";

  useEffect(() => {
    if (!started || isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, isFinished]);

  const startInterview = () => {
    if (!selectedRole) return;

    setStarted(true);
    setIsFinished(false);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setCurrentAnswer("");
    setTimeLeft(getTimerForDifficulty(difficulty));
  };

  const submitAnswer = () => {
    if (!currentAnswer.trim() || !currentQuestion) return;

    const result = getFeedback(currentAnswer, difficulty);

    const newCard: AnswerCard = {
      question: currentQuestion,
      answer: currentAnswer.trim(),
      feedback: result.feedback,
      score: result.score,
    };

    const updatedAnswers = [...answers, newCard];
    setAnswers(updatedAnswers);
    setCurrentAnswer("");

    if (currentQuestionIndex >= questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const totalScore =
    answers.length > 0
      ? Math.round(
          answers.reduce((acc, item) => acc + item.score, 0) / answers.length
        )
      : 0;

 const downloadReport = () => {
  if (!selectedRole) return;

  const pdf = new jsPDF("p", "mm", "a4");

  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const margin = 14;
  const contentW = pageW - margin * 2;

  const bg: [number, number, number] = [11, 11, 18];
  const white: [number, number, number] = [255, 255, 255];
  const muted: [number, number, number] = [180, 180, 190];
  const accent: [number, number, number] = [168, 85, 247];

  const addBg = () => {
    pdf.setFillColor(bg[0], bg[1], bg[2]);
    pdf.rect(0, 0, pageW, pageH, "F");
  };

  const addHeader = () => {
    addBg();

    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.text("AI Career Copilot", margin, 18);

    pdf.setTextColor(accent[0], accent[1], accent[2]);
    pdf.setFontSize(16);
    pdf.text("Interview Performance Report", margin, 27);

    pdf.setTextColor(muted[0], muted[1], muted[2]);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(`Role: ${selectedRole.title}`, margin, 36);
    pdf.text(`Difficulty: ${difficulty}`, margin, 42);
    pdf.text(`Generated: ${new Date().toLocaleDateString()}`, margin, 48);
  };

  const drawMetric = (
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    value: string
  ) => {
    pdf.setFillColor(24, 24, 36);
    pdf.setDrawColor(90, 90, 120);
    pdf.roundedRect(x, y, w, h, 4, 4, "FD");

    pdf.setTextColor(muted[0], muted[1], muted[2]);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.text(label, x + 4, y + 6);

    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text(value, x + 4, y + 15);
  };

  const drawAnswerCard = (
    item: AnswerCard,
    index: number,
    startY: number
  ) => {
    const qLines = pdf.splitTextToSize(item.question, contentW - 10);
    const aLines = pdf.splitTextToSize(item.answer, contentW - 10);
    const fLines = pdf.splitTextToSize(item.feedback, contentW - 10);

    const cardH =
      26 +
      qLines.length * 5 +
      aLines.length * 5 +
      fLines.length * 5 +
      10;

    let y = startY;

    if (y + cardH > pageH - margin) {
      pdf.addPage();
      addHeader();
      y = 58;
    }

    pdf.setFillColor(24, 24, 36);
    pdf.setDrawColor(90, 90, 120);
    pdf.roundedRect(margin, y, contentW, cardH, 4, 4, "FD");

    let cursorY = y + 8;

    pdf.setTextColor(accent[0], accent[1], accent[2]);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(`Question ${index + 1}`, margin + 4, cursorY);
    cursorY += 6;

    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text(qLines, margin + 4, cursorY);
    cursorY += qLines.length * 5 + 3;

    pdf.setTextColor(muted[0], muted[1], muted[2]);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.text("Your Answer", margin + 4, cursorY);
    cursorY += 5;

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    pdf.text(aLines, margin + 4, cursorY);
    cursorY += aLines.length * 5 + 3;

    pdf.setTextColor(accent[0], accent[1], accent[2]);
    pdf.setFontSize(9);
    pdf.text("Feedback", margin + 4, cursorY);
    cursorY += 5;

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    pdf.text(fLines, margin + 4, cursorY);

    return y + cardH + 6;
  };

  // Page 1
  addHeader();

  drawMetric(margin, 58, (contentW - 6) / 2, 22, "Overall Score", `${totalScore}%`);
  drawMetric(
    margin + (contentW - 6) / 2 + 6,
    58,
    (contentW - 6) / 2,
    22,
    "Questions Done",
    `${answers.length}`
  );

  drawMetric(margin, 84, (contentW - 6) / 2, 22, "Difficulty", difficulty.toUpperCase());
  drawMetric(
    margin + (contentW - 6) / 2 + 6,
    84,
    (contentW - 6) / 2,
    22,
    "Role",
    selectedRole.title
  );

  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.text("Answer Review", margin, 118);

  let y = 126;

  answers.forEach((item, index) => {
    y = drawAnswerCard(item, index, y);
  });

  pdf.save("interview-report.pdf");
};


  

  return (
    <div className="flex-1 min-h-screen bg-black text-white p-10 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h1 className="text-5xl font-bold">Interview Prep</h1>
            <p className="text-gray-400 mt-3 max-w-2xl">
              Choose a role, start a mock interview, answer questions, and get instant AI-style feedback.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-4 min-w-[180px]">
            <p className="text-xs text-gray-400">Timer</p>
            <p className="text-3xl font-bold mt-1">{formatTime(timeLeft)}</p>
          </div>
        </div>

        {!started && (
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-5">Choose a role</h2>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role)}
                    className={`relative overflow-hidden rounded-[28px] border p-5 text-left transition duration-300 hover:scale-[1.02] ${
                      selectedRole?.id === role.id
                        ? "border-white/30 bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/8"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 opacity-10 bg-gradient-to-br ${role.accent}`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${role.accent} mb-4`}
                      />
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <p className="text-sm text-gray-400 mt-2">{role.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-5">Choose difficulty</h2>
              <div className="flex flex-wrap gap-4">
                {(["easy", "medium", "hard"] as Difficulty[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`px-5 py-3 rounded-full border transition ${
                      difficulty === level
                        ? "bg-purple-600 border-purple-500"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startInterview}
              disabled={!selectedRole}
              className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Mock Interview
            </button>
          </div>
        )}

        {started && !isFinished && selectedRole && (
          <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.8fr] gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-400">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </p>
                  <h2 className="text-2xl font-semibold mt-2">{selectedRole.title}</h2>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-400">Progress</p>
                  <p className="text-xl font-semibold">
                    {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
                  </p>
                </div>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <div className="bg-black/30 border border-white/10 rounded-[28px] p-6 mb-6">
                <p className="text-sm text-gray-400 mb-3">AI Interviewer</p>
                <h3 className="text-2xl font-semibold leading-snug">
                  {currentQuestion}
                </h3>
              </div>

              <textarea
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full min-h-48 bg-white/5 border border-white/10 rounded-[28px] p-5 outline-none placeholder:text-gray-500 resize-none"
              />

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={submitAnswer}
                  className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-2xl font-semibold"
                >
                  Submit Answer
                </button>

                <button
                  onClick={() => {
                    setCurrentAnswer("");
                    if (currentQuestionIndex < questions.length - 1) {
                      setCurrentQuestionIndex((prev) => prev + 1);
                    } else {
                      setIsFinished(true);
                    }
                  }}
                  className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-6 py-3 rounded-2xl font-semibold"
                >
                  Skip Question
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-6">
                <h3 className="text-xl font-semibold mb-4">Live Feedback</h3>
                <div className="space-y-4">
                  {answers.length === 0 ? (
                    <div className="text-gray-400 text-sm">
                      Your feedback will appear here after you submit an answer.
                    </div>
                  ) : (
                    answers
                      .slice()
                      .reverse()
                      .map((item, index) => (
                        <div
                          key={`${item.question}-${index}`}
                          className="bg-black/30 border border-white/10 rounded-2xl p-4"
                        >
                          <p className="text-sm text-gray-400 mb-2">
                            Score: {item.score}%
                          </p>
                          <p className="font-medium">{item.feedback}</p>
                        </div>
                      ))
                  )}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[32px] p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Tips</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                    Use the STAR method for project answers.
                  </div>
                  <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                    Keep answers structured and example-driven.
                  </div>
                  <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                    Mention tools, outcomes, and what you learned.
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[32px] p-6">
                <h3 className="text-xl font-semibold mb-4">Session Score</h3>
                <div className="text-5xl font-bold text-purple-400">{totalScore}%</div>
                <p className="text-gray-400 text-sm mt-3">
                  Your score updates as you complete answers.
                </p>
              </div>
            </div>
          </div>
        )}

        {isFinished && selectedRole && (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h2 className="text-3xl font-bold mb-3">Interview Complete</h2>
              <p className="text-gray-400">
                Great job. Here is your summary for {selectedRole.title}.
              </p>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-[28px] p-6">
                <p className="text-gray-400 text-sm">Overall Score</p>
                <p className="text-4xl font-bold mt-3 text-purple-400">{totalScore}%</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[28px] p-6">
                <p className="text-gray-400 text-sm">Questions Done</p>
                <p className="text-4xl font-bold mt-3">{answers.length}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[28px] p-6">
                <p className="text-gray-400 text-sm">Difficulty</p>
                <p className="text-4xl font-bold mt-3 capitalize">{difficulty}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[28px] p-6">
                <p className="text-gray-400 text-sm">Role</p>
                <p className="text-2xl font-bold mt-3">{selectedRole.title}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-semibold mb-5">Answer Review</h3>
              <div className="space-y-5">
                {answers.map((item, index) => (
                  <div
                    key={`${item.question}-${index}`}
                    className="bg-black/30 border border-white/10 rounded-2xl p-5"
                  >
                    <p className="text-sm text-gray-400 mb-2">
                      Question {index + 1}
                    </p>
                    <p className="font-semibold mb-3">{item.question}</p>
                    <p className="text-gray-300 mb-4">{item.answer}</p>
                    <div className="text-sm text-purple-300">{item.feedback}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setStarted(false);
                  setIsFinished(false);
                  setAnswers([]);
                  setCurrentQuestionIndex(0);
                  setCurrentAnswer("");
                }}
                className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Try Again
              </button>

              <button
                onClick={downloadReport}
                className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Download Report
              </button>
            </div>

            <div className="hidden">
              <div ref={reportRef} className="w-[900px] bg-[#0b0b12] text-white p-10">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
                    AI Career Copilot
                  </p>
                  <h1 className="text-4xl font-bold mt-3">
                    Interview Performance Report
                  </h1>
                  <p className="text-gray-400 mt-2">
                    Premium summary for {selectedRole.title}
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs text-gray-400">Role</p>
                    <p className="text-lg font-semibold mt-2">{selectedRole.title}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs text-gray-400">Difficulty</p>
                    <p className="text-lg font-semibold mt-2 capitalize">{difficulty}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs text-gray-400">Questions</p>
                    <p className="text-lg font-semibold mt-2">{answers.length}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs text-gray-400">Overall Score</p>
                    <p className="text-lg font-semibold mt-2 text-purple-300">{totalScore}%</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {answers.map((item, index) => (
                    <div
                      key={`${item.question}-${index}`}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5"
                    >
                      <p className="text-xs text-gray-400 mb-2">Question {index + 1}</p>
                      <p className="font-semibold mb-3">{item.question}</p>
                      <p className="text-gray-300 mb-3">{item.answer}</p>
                      <p className="text-sm text-purple-300">{item.feedback}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}