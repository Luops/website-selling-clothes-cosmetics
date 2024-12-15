import { NextRequest, NextResponse } from "next/server"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GET(req: NextRequest, res: NextResponse){
  return NextResponse.json({message: "its working!"})
}