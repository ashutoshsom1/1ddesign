import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client safely with fallback for build-time static evaluation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveSubmission(submission: {
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  message: string;
}) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.warn("Supabase URL not set. Submission simulated:", submission);
    return { id: "simulated-" + Date.now(), ...submission, created_at: new Date().toISOString() };
  }

  const { data, error } = await supabase
    .from("submissions")
    .insert([submission])
    .select()
    .single();

  if (error) {
    console.error("Error saving submission to Supabase:", error);
    throw error;
  }

  return data;
}

export async function getSubmissions() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return [];
  }

  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching submissions from Supabase:", error);
    throw error;
  }

  return data || [];
}
