import { supabase } from "../../../../supabase";
import { User } from "@/types/types";

export async function getCredentialUseCase({
  inputEmail,
  inputPassword,
}): Promise<User | null> {
 
    
  let { data, error } = await supabase
    .from("user")
    .select("id, email, password, role, name");

  const { email, password, role, id, name } = data![0];
  console.log('data', data![0]);

  if (inputEmail !== email || inputPassword !== password || error) {
    console.log("error", error);
    return null;
  }

  console.log('data fetch from database', data);
  
  return {
    email,
    role,
    id,
    name,
  };
}
