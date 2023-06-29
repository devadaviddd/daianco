import { createClient } from "@supabase/supabase-js";

const superbaseUrl = process.env.SUPABASE_URL!;
const superbaseKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(
  superbaseUrl,
  superbaseKey
);
