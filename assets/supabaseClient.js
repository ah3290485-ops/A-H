import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// 🔴 غيّر القيم التالية
const SUPABASE_URL = "PUT_YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "PUT_YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
