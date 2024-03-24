import { NextResponse } from "next/server";
import jsonData from "../db.json";

export async function GET() {
  await new Promise((res) =>
    setTimeout(() => {
      res("done");
    }, 500)
  );
  return NextResponse.json(jsonData.cart, { status: 200 });
}
