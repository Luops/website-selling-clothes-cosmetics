import { NextRequest, NextResponse } from "next/server"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest, res: NextResponse){
  const { email, password } = await req.json();
  console.log(email)
  console.log(password)
  return NextResponse.json({message: "its working!"})
}
