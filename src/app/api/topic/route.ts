"use server";
import { createTopic, findTopic, getAllTopics } from "@/src/lib/mongo_db";
import { authOptions } from "@/src/server/auth";
import { getServerSession } from "next-auth";
// import { getServerSession } from "next-auth/next";
import { NextResponse, NextRequest } from "next/server";
// import { authOptions } from "@/src/server/auth";

export async function POST(req: Request, res: NextResponse) {
  const session = await getServerSession(authOptions);
  try {
    if (!session)
      return NextResponse.json({ error: "not authorized" }, { status: 401 });

    const res = await req.json();
    // const isExist = await findTopic(res);
    // if (isExist) return NextResponse.json({ topic: isExist }, { status: 201 });
    const topic = await createTopic(res);
    return NextResponse.json({ topic }, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 400 });
  }
}

export async function GET(req: Request) {
  try {
    const topics = await getAllTopics({});
    return NextResponse.json({ topics });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 400 });
  }
}
