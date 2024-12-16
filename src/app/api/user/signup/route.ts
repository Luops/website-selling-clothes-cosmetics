
import { supabase } from "@/core/utils/supabase";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest){
  const { email, password } = await req.json();
 
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if(error){
    return NextResponse.json({message: error.message})
  }
  else{
    console.log("Congratulations! Your account has been created! Check your e-mail to validate it!")
    return NextResponse.json({message: "Congratulations! Your account has been created! Check your e-mail to validate it!"})
  }
}