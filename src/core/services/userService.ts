import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";

export class UserService {
  static async register(
    email: string,
    password: string,
    phone: string
  ): Promise<boolean | void> {
    return await supabase.auth
      .signUp({ email: email, password: password, phone: phone })
      .then(() => true)
      .catch(() => console.log("Um erro ocorreu!"));
  }

  static async login(email: string, password: string): Promise<{user: User, session: Session}>{
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if(error){
      throw new Error(error.message);
    }

    return data;
  }
}
