import { supabase } from "../utils/supabase";

export class UserService {
  async signUp(
    email: string,
    password: string,
    phone: string
  ): Promise<boolean | void> {
    return await supabase.auth
      .signUp({ email: email, password: password, phone: phone })
      .then(() => true)
      .catch(() => console.log("Um erro ocorreu!"));
  }
}
