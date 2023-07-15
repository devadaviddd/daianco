import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/db.types";

const superbaseUrl = process.env.SUPABASE_URL!;
const superbaseKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(
  superbaseUrl,
  superbaseKey
);
