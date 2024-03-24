import { NextResponse } from "next/server";
import jsonData from "../db.json";

export async function GET() {
  await new Promise((res) =>
    setTimeout(() => {
      res("done");
    }, 500)
  );
  return NextResponse.json(jsonData.products, { status: 200 });
}

export async function POST(req: Request) {
  const requestBody = await req.json();
  console.log("---", requestBody);
  return NextResponse.json(jsonData.products, { status: 200 });
}
