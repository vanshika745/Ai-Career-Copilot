"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

const quickPrompts = [
  "Create a frontend roadmap",
  "Review my resume",
  "Suggest project ideas",
  "Mock interview questions",
  "Skills for internships",
];

export default function ChatInterface() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hello Vanshika 👋\nHow can I help you today?",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = {
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      let data: any = null;

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const textResponse = await response.text();
        data = { error: textResponse };
      }

      if (!response.ok) {
        throw new Error(
          data?.error || data?.message || "Invalid response from server"
        );
      }

      const aiMessage: Message = {
        role: "ai",
        text: data.reply || data.message || "No response received.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: error?.message || "Server error. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    sendMessage(input);
  };

  return (
    <section className="flex-1 h-screen bg-black text-white flex overflow-hidden">
      <aside className="w-80 border-r border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col">
        <button className="bg-white/10 hover:bg-white/15 transition rounded-2xl py-4 font-semibold border border-white/10">
          + New Chat
        </button>

        <div className="mt-8">
          <p className="text-sm text-gray-400 mb-4">Recent Chats</p>

          <div className="space-y-3">
            <div className="bg-white/10 border border-white/10 p-4 rounded-2xl cursor-pointer hover:bg-white/20 transition">
              Frontend Roadmap
            </div>
            <div className="bg-white/10 border border-white/10 p-4 rounded-2xl cursor-pointer hover:bg-white/20 transition">
              Resume Review
            </div>
            <div className="bg-white/10 border border-white/10 p-4 rounded-2xl cursor-pointer hover:bg-white/20 transition">
              Interview Prep
            </div>
          </div>
        </div>

        <button className="mt-auto text-left text-red-400 hover:text-red-300 transition">
          Clear Conversations
        </button>
      </aside>

      <section className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/40 backdrop-blur-xl">
          <div>
            <h2 className="text-2xl font-bold">AI Career Copilot</h2>
            <p className="text-sm text-gray-400">Smart AI assistant</p>
          </div>

          <div className="flex items-center gap-2 text-green-400 text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            Online
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-2xl rounded-3xl px-6 py-5 whitespace-pre-line ${
                  message.role === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 border border-white/10 text-gray-100 backdrop-blur-xl"
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="max-w-2xl rounded-3xl px-6 py-5 bg-white/10 border border-white/10 text-gray-300 backdrop-blur-xl">
                Thinking...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="px-8 pb-4">
          <div className="flex flex-wrap gap-3">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-gray-200"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask anything about your career..."
              className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-4 outline-none placeholder:text-gray-500"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-full font-semibold disabled:opacity-60"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}