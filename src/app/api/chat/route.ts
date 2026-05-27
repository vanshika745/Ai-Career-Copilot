import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body?.message;

    let reply = "";

    if (message.toLowerCase().includes("frontend")) {
      reply =
        "To become a frontend developer, focus on HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and build real-world projects consistently.";
    } else if (message.toLowerCase().includes("resume")) {
      reply =
        "Your resume should contain strong projects, clean formatting, technical skills, certifications, and measurable achievements.";
    } else if (message.toLowerCase().includes("interview")) {
      reply =
        "For interview preparation, practice DSA basics, communication skills, project explanation, and mock interviews regularly.";
    } else {
      reply =
        "I am your AI Career Copilot 🚀 Ask me about internships, projects, resumes, interview prep, frontend, backend, cloud, or career guidance.";
    }

    return NextResponse.json({
      reply,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}