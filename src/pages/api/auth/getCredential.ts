import { NextApiRequest } from "next";
import { supabase } from "../../../../supabase";
import { User } from "@/types/types";

export default async function getCredential(
  req: NextApiRequest,
): Promise<User | null> {
  const { email, password } = req.body;

  let { data, error } = await supabase
    .from("user")
    .select("id, email, password, role, name");

  const { email: emailDB, password: passwordDB, role, id, name } = data![0];
  if (email !== emailDB || password !== passwordDB || error) {
    console.log("error", error);
    return null;
  }
  return {
    email: emailDB,
    role,
    id,
    name,
  };
}
