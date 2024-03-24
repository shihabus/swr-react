import { NextResponse } from "next/server";
import jsonData from "./db.json";

export async function GET() {
  return NextResponse.json({ data: jsonData }, { status: 200 });
}
