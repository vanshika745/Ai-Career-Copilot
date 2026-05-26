import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "API working",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      reply: `Test OK: ${body.message}`,
    });
  } catch (error) {
    return NextResponse.json({
      reply: "Something went wrong",
    });
  }
}