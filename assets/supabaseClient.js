
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://egutbxeysbzvddmpyrkv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVndXRieGV5c2J6dmRkbXB5cmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0MjE0NDUsImV4cCI6MjA4MTk5NzQ0NX0.DfrpShYXjzSOGSU_IJ4c2sT2WVH4E8Vv2KOLBSDQnwc";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
