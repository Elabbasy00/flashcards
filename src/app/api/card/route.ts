"use server";
import { createCard, getAllCards } from "@/src/lib/mongo_db";
import { getServerSession } from "next-auth/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import { authOptions } from "@/src/server/auth";

//------------------------------------------------------------------------------
// Handler for api calls to `/api/cards`
//------------------------------------------------------------------------------
// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const session = await getSession({ req });

//     if (!session) {
//       return res.status(401).send("Unauthorized");
//     }

//     const { newDeck } = req.body;
//     const deck = await createCard(newDeck);

//     return res.status(200).json({ deck });
//   }
//   // res.status(201);
//   // res.status(404).json(`Unsupported method: ${req.method}`);
//   res.status(200).json({ success: "ok" });
// }

// export { handler as GET, handler as POST };

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  try {
    const res = await req.json();
    if (session) res["user"] = session.user.userId;

    const card = await createCard(res);
    return NextResponse.json({ card });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  try {
    let filters: any = {};
    const lastid = request.nextUrl.searchParams.get("lastid");
    const params = Object.fromEntries(
      new URLSearchParams(request.nextUrl.search)
    );

    if (lastid) {
      filters["_id"] = { $gt: lastid };
      delete params.lastid;
    }

    filters = { ...filters, ...params };

    const cards = await getAllCards(filters);

    return NextResponse.json({ cards });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 400 });
  }
}
